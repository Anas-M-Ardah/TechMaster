// utils/connectionSpeed.js
export const checkConnectionSpeed = () => {
    return new Promise((resolve) => {
      const imageAddr = "https://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg";
      const downloadSize = 5245329; // bytes
  
      const startTime = new Date().getTime();
      const download = new Image();
      
      download.onload = function () {
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = downloadSize * 8;
        const speedBps = (bitsLoaded / duration).toFixed(2);
        const speedKbps = (speedBps / 1024).toFixed(2);
        const speedMbps = (speedKbps / 1024).toFixed(2);
        
        resolve({
          speed: speedMbps,
          isSlow: speedMbps < 1 // Consider connection slow if less than 1 Mbps
        });
      };
  
      download.onerror = function () {
        resolve({
          speed: 0,
          isSlow: true
        });
      };
  
      download.src = imageAddr;
    });
  };