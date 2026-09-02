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
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        vertical-align: middle !important;
        line-height: 1.4 !important;
        padding: 2px 8px 5px 8px !important;
        min-width: 44px !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
        box-sizing: border-box !important;
      }
      .badge {
        display: inline-block !important;
        align-items: center !important;
        justify-content: center !important;
        text-align: center !important;
        vertical-align: middle !important;
        line-height: 1.4 !important;
        padding: 1px 8px 4px 8px !important;
        min-width: 36px !important;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
        font-weight: 700 !important;
        white-space: nowrap !important;
        box-sizing: border-box !important;
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

    // Collect protected element boundary boxes relative to container
    const containerRect = container.getBoundingClientRect();
    const containerRenderedHeight = containerRect.height || container.offsetHeight || 1;

    const protectedEls = container.querySelectorAll(
      'tr, .sec-title, .group-card, .notes, .header, .info-box'
    );
    const protectedRangesDom: { top: number; bottom: number }[] = [];
    protectedEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top - containerRect.top;
      const bottom = rect.bottom - containerRect.top;
      if (bottom > top) {
        protectedRangesDom.push({ top, bottom });
      }
    });

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
    const canvasYRatio = canvasHeight / containerRenderedHeight;

    const protectedRanges = protectedRangesDom.map((r) => ({
      top: r.top * canvasYRatio,
      bottom: r.bottom * canvasYRatio,
    }));

    // Height of one A4 page in canvas pixels
    const pageCanvasHeight = canvasWidth * (pdfPageHeight / pdfPageWidth);

    if (canvasHeight <= pageCanvasHeight) {
      // Single page document
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const imgHeightMm = (canvasHeight * pdfPageWidth) / canvasWidth;
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfPageWidth, imgHeightMm);
    } else {
      // Multi-page document with element-aware page splitting
      let currentY = 0;
      let pageCount = 0;

      while (currentY < canvasHeight) {
        const remainingH = canvasHeight - currentY;

        if (remainingH <= pageCanvasHeight) {
          // Last page fits within one pageCanvasHeight
          const srcH = remainingH;
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
              currentY,
              canvasWidth,
              srcH,
              0,
              0,
              canvasWidth,
              srcH
            );
          }

          const imgData = pageCanvas.toDataURL('image/jpeg', 0.98);

          if (pageCount > 0) {
            pdf.addPage('a4', 'portrait');
          }

          pdf.addImage(imgData, 'JPEG', 0, 0, pdfPageWidth, pdfPageHeight);
          pageCount++;
          break;
        }

        // Default target split point
        const targetY = currentY + pageCanvasHeight;
        let splitY = targetY;

        // Check if targetY cuts through any protected element (top < targetY < bottom)
        const intersecting = protectedRanges.find(
          (r) => r.top < targetY && targetY < r.bottom
        );

        if (intersecting) {
          const elementHeight = intersecting.bottom - intersecting.top;
          const minPageHeight = pageCanvasHeight * 0.25;
          const proposedSplitY = intersecting.top;

          if (
            elementHeight <= pageCanvasHeight &&
            proposedSplitY - currentY >= minPageHeight
          ) {
            splitY = proposedSplitY;
          }
        }

        // Safety fallback: ensure strictly forward progress
        if (splitY <= currentY) {
          splitY = targetY;
        }

        const srcH = Math.min(splitY - currentY, canvasHeight - currentY);
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
            currentY,
            canvasWidth,
            srcH,
            0,
            0,
            canvasWidth,
            srcH
          );
        }

        const imgData = pageCanvas.toDataURL('image/jpeg', 0.98);

        if (pageCount > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfPageWidth, pdfPageHeight);
        pageCount++;

        currentY = splitY;
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
