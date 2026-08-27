import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export interface PdfGenerationOptions {
  filename?: string;
  onProgress?: (status: 'rendering' | 'processing' | 'saving' | 'done' | 'error') => void;
}

/**
 * Clean and prepare HTML string for PDF rendering
 */
function prepareHtmlForPdf(htmlContent: string): string {
  // Remove scripts
  let cleaned = htmlContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Replace window.print() inline handlers
  cleaned = cleaned.replace(/onclick="window\.print\(\)"/gi, '');
  
  return cleaned;
}

/**
 * Generate and download a high-quality, multi-page PDF from an HTML string or template
 */
export async function downloadPdfFromHtml(
  htmlContent: string,
  filename: string = '약관분류표.pdf',
  onProgress?: (status: 'rendering' | 'processing' | 'saving' | 'done' | 'error') => void
): Promise<void> {
  try {
    onProgress?.('rendering');

    // Ensure filename ends with .pdf
    const sanitizedFilename = filename.endsWith('.pdf') 
      ? filename 
      : `${filename.replace(/\.html$/, '')}.pdf`;

    const cleanedHtml = prepareHtmlForPdf(htmlContent);

    // Create a hidden rendering container
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '-99999px';
    container.style.left = '-99999px';
    container.style.width = '800px'; // Standard width matching A4 aspect ratio at ~96 DPI
    container.style.background = '#ffffff';
    container.style.color = '#0f172a';
    container.style.zIndex = '-9999';
    container.style.opacity = '1';
    container.style.pointerEvents = 'none';

    // Create shadow/sandbox div with cleaned HTML
    const innerWrapper = document.createElement('div');
    innerWrapper.innerHTML = cleanedHtml;

    // Remove .no-print elements inside the rendered DOM
    const noPrintEls = innerWrapper.querySelectorAll('.no-print');
    noPrintEls.forEach((el) => el.remove());

    // Inject global PDF typography & KCD badge alignment normalization for precise centering
    const styleOverride = document.createElement('style');
    styleOverride.textContent = `
      .code {
        display: inline-block !important;
        box-sizing: border-box !important;
        text-align: center !important;
        vertical-align: middle !important;
        line-height: 1.25 !important;
        padding: 3px 8px !important;
        min-width: 44px !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
      }
      .badge {
        display: inline-block !important;
        box-sizing: border-box !important;
        text-align: center !important;
        vertical-align: middle !important;
        line-height: 1.25 !important;
        white-space: nowrap !important;
      }
      td.text-center, th.text-center {
        text-align: center !important;
        vertical-align: middle !important;
      }
    `;
    innerWrapper.appendChild(styleOverride);

    container.appendChild(innerWrapper);
    document.body.appendChild(container);

    // Give browser a moment to layout and render fonts
    await new Promise((resolve) => setTimeout(resolve, 200));

    onProgress?.('processing');

    // Capture DOM using html2canvas with scale 2 for crisp typography
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 800,
    });

    // Remove the temporary container
    document.body.removeChild(container);

    onProgress?.('saving');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pdfPageWidth = 210; // A4 mm
    const pdfPageHeight = 297; // A4 mm
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Height of one A4 page in canvas pixels
    const pageCanvasHeight = canvasWidth * (pdfPageHeight / pdfPageWidth);

    if (canvasHeight <= pageCanvasHeight) {
      // Single page document
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const imgHeightMm = (canvasHeight * pdfPageWidth) / canvasWidth;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfPageWidth, imgHeightMm);
    } else {
      // Multi-page document with smart page slicing
      const totalPages = Math.ceil(canvasHeight / pageCanvasHeight);

      for (let pageIdx = 0; pageIdx < totalPages; pageIdx++) {
        const srcY = pageIdx * pageCanvasHeight;
        const srcH = Math.min(pageCanvasHeight, canvasHeight - srcY);

        if (srcH <= 0) break;

        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvasWidth;
        pageCanvas.height = pageCanvasHeight;
        const ctx = pageCanvas.getContext('2d');

        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          ctx.drawImage(
            canvas,
            0,
            srcY,
            canvasWidth,
            srcH,
            0,
            0,
            canvasWidth,
            srcH
          );
        }

        const imgData = pageCanvas.toDataURL('image/jpeg', 0.98);

        if (pageIdx > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfPageWidth, pdfPageHeight);
      }
    }

    // Save as true PDF binary
    pdf.save(sanitizedFilename);
    onProgress?.('done');
  } catch (error) {
    console.error('PDF Generation Error:', error);
    onProgress?.('error');
    throw error;
  }
}
