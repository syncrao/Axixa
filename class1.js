class Logger {
    constructor() {
      if (Logger.instance) {
        return Logger.instance; 
      }
      
      this.logs = []; 
      Logger.instance = this; 
    }
  
    log(message) {
      this.logs.push(message);
      console.log(`Log: ${message}`);
    }
  
    getLogs() {
      return this.logs;
    }
  }
  
  // Usage
  const logger1 = new Logger();
  logger1.log("User logged in");
  
  const logger2 = new Logger();
  logger2.log("User clicked a button");
  
  console.log(logger1 === logger2); 
  console.log(logger1.getLogs()); 
 
  