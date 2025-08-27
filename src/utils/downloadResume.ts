/**
 * File download utilities for portfolio downloads
 */

export interface DownloadableFile {
  name: string;
  filename: string;
  path: string;
  description?: string;
  size?: string;
  type: 'pdf' | 'doc' | 'image' | 'zip' | 'other';
}

// Available downloads configuration
export const availableDownloads: DownloadableFile[] = [
  {
    name: 'Resume',
    filename: 'Jordan_Smith_Resume.pdf',
    path: '/resume.pdf',
    description: 'Complete professional resume with experience and skills',
    size: '2.1 MB',
    type: 'pdf'
  },
  {
    name: 'Portfolio Case Study',
    filename: 'Jordan_Smith_Portfolio_Case_Study.pdf',
    path: '/portfolio-case-study.pdf',
    description: 'Detailed case study of e-commerce mobile app redesign',
    size: '5.3 MB',
    type: 'pdf'
  },
  {
    name: 'Design System Guide',
    filename: 'Jordan_Smith_Design_System.pdf',
    path: '/design-system-guide.pdf',
    description: 'Component library and design guidelines documentation',
    size: '3.7 MB',
    type: 'pdf'
  }
];

/**
 * Generic file download function
 */
export function downloadFile(file: DownloadableFile) {
  try {
    const link = document.createElement('a');
    link.href = file.path;
    link.download = file.filename;
    link.setAttribute('target', '_blank');
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
    // Fallback: open in new tab if download fails
    window.open(file.path, '_blank');
  }
}

/**
 * Helper function to download the resume PDF file (for backward compatibility)
 */
export function downloadResume() {
  const resumeFile = availableDownloads.find(file => file.name === 'Resume');
  if (resumeFile) {
    downloadFile(resumeFile);
  }
}

/**
 * Download multiple files at once
 */
export function downloadMultipleFiles(files: DownloadableFile[]) {
  files.forEach((file, index) => {
    // Stagger downloads slightly to avoid browser blocking
    setTimeout(() => downloadFile(file), index * 100);
  });
}

/**
 * Get file type icon name for Lucide icons
 */
export function getFileTypeIcon(type: DownloadableFile['type']): string {
  switch (type) {
    case 'pdf':
      return 'FileText';
    case 'doc':
      return 'FileText';
    case 'image':
      return 'Image';
    case 'zip':
      return 'Archive';
    default:
      return 'Download';
  }
}