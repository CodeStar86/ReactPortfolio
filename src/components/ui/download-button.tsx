import { motion } from 'framer-motion';
import { Download, FileText, Image, Archive } from 'lucide-react';
import { Button, type ButtonProps } from './button';
import { type DownloadableFile, downloadFile } from '../../utils/downloadResume';

interface DownloadButtonProps extends Omit<ButtonProps, 'onClick'> {
  file: DownloadableFile;
  showIcon?: boolean;
  showSize?: boolean;
  animated?: boolean;
}

export function DownloadButton({ 
  file, 
  showIcon = true, 
  showSize = false,
  animated = true,
  children,
  ...buttonProps 
}: DownloadButtonProps) {
  const getIcon = () => {
    switch (file.type) {
      case 'pdf':
        return FileText;
      case 'image':
        return Image;
      case 'zip':
        return Archive;
      default:
        return Download;
    }
  };

  const buttonContent = (
    <Button
      {...buttonProps}
      onClick={() => downloadFile(file)}
    >
      {showIcon && (() => {
        const Icon = getIcon();
        return <Icon className="size-4 mr-2" />;
      })()}
      {children || `Download ${file.name}`}
      {showSize && file.size && (
        <span className="ml-2 text-xs opacity-70">({file.size})</span>
      )}
    </Button>
  );

  if (animated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
}

// Quick download buttons for common files
export function ResumeDownloadButton(props: Omit<DownloadButtonProps, 'file'>) {
  return (
    <DownloadButton
      file={{
        name: 'Resume',
        filename: 'Jordan_Smith_Resume.pdf',
        path: '/resume.pdf',
        type: 'pdf'
      }}
      {...props}
    />
  );
}

export function PortfolioDownloadButton(props: Omit<DownloadButtonProps, 'file'>) {
  return (
    <DownloadButton
      file={{
        name: 'Portfolio Case Study',
        filename: 'Jordan_Smith_Portfolio_Case_Study.pdf',
        path: '/portfolio-case-study.pdf',
        type: 'pdf'
      }}
      {...props}
    />
  );
}