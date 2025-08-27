import { motion } from 'framer-motion';
import { FileText, Download, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  availableDownloads, 
  downloadFile, 
  downloadMultipleFiles, 
  type DownloadableFile 
} from '../utils/downloadResume';

export function DownloadsSection() {
  const handleDownloadAll = () => {
    downloadMultipleFiles(availableDownloads);
  };

  const getFileIcon = (type: DownloadableFile['type']) => {
    switch (type) {
      case 'pdf':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <section id="downloads" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-gradient">Downloads</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Access my complete portfolio materials, including detailed case studies, 
            design documentation, and professional resources.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="gradient-primary border-0 shadow-xl mb-8"
              onClick={handleDownloadAll}
            >
              <Package className="size-5 mr-2" />
              Download All Files
            </Button>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableDownloads.map((file, index) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {(() => {
                          const Icon = getFileIcon(file.type);
                          return <Icon className="size-5 text-primary" />;
                        })()}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{file.name}</CardTitle>
                        {file.size && (
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {file.size}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {file.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {file.description}
                      </p>
                    )}
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => downloadFile(file)}
                      >
                        <Download className="size-4 mr-2" />
                        Download {file.type.toUpperCase()}
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional resources */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Need Something Specific?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Looking for additional portfolio pieces, references, or custom documentation? 
            I'd be happy to prepare specific materials for your review.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Request Custom Materials
          </Button>
        </motion.div>
      </div>
    </section>
  );
}