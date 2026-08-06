import React, { Component, ErrorInfo, ReactNode } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error in ErrorBoundary:", error, errorInfo);
  }

  private handleSafeRestore = () => {
    try {
      // Clear specific temporary view states that might have caused a crash while preserving user data
      sessionStorage.removeItem('app_last_error_state');
      localStorage.removeItem('terms_temp_tab');
    } catch {
      // ignore
    }
    this.setState({ hasError: false, error: null });
    // If resetting state directly doesn't unmount, reload cleanly to home
    window.location.href = window.location.pathname;
  };

  private handleFullReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch {
      // ignore
    }
    window.location.href = window.location.pathname;
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FAF8F5] text-[#123941] flex flex-col items-center justify-center p-6 font-sans">
          <div className="max-w-md w-full bg-white border border-[#EAE5DE] p-8 rounded-2xl shadow-xl space-y-6 text-center">
            <div className="w-16 h-16 bg-[#cb9f74]/15 rounded-full flex items-center justify-center mx-auto text-[#cb9f74]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-xl font-black tracking-tight uppercase text-[#123941]">시스템 진단 및 안전 복구</h1>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                일시적인 데이터 오류나 캐시 문제로 화면을 불러오지 못했습니다. 아래 복구 버튼을 통해 이전 정상 상태로 안전하게 복구할 수 있습니다.
              </p>
            </div>

            {this.state.error && (
              <div className="bg-red-50 border border-red-200/80 p-3.5 rounded-xl text-left font-mono text-[11px] text-red-700 overflow-auto max-h-36 leading-normal space-y-1">
                <p className="font-bold">Error: {this.state.error.message}</p>
                {this.state.error.stack && (
                  <pre className="text-[10px] opacity-80 overflow-x-auto whitespace-pre-wrap">
                    {this.state.error.stack.split('\n').slice(0, 3).join('\n')}
                  </pre>
                )}
              </div>
            )}

            <div className="pt-2 space-y-2.5">
              <button
                onClick={this.handleSafeRestore}
                className="w-full py-3 px-4 bg-[#123941] hover:bg-[#1e4e58] text-white text-xs font-bold tracking-wider rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🛡️ 이전 정상 상태(홈 화면)로 안전 복구</span>
              </button>
              <button
                onClick={this.handleFullReset}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                캐시 및 초기 데이터 리셋
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full py-2 px-4 bg-white hover:bg-slate-50 text-slate-500 text-xs font-medium rounded-xl border border-slate-200 transition-all cursor-pointer"
              >
                페이지 새로고침
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
