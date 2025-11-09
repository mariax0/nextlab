class Software {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`\n${this.name} is running`);
  }
}

class Plugin {
  constructor(name) {
    this.name = name;
  }

  install() {
    console.log(`Plugin "${this.name}" installed`);
  }

  execute() {
    console.log(`Plugin "${this.name}" executing`);
  }
}

class Browser extends Software {
  constructor(name) {
    super(name);
    this.plugins = [];
  }

  addPlugin(plugin) {
    if (plugin instanceof Plugin) {
      this.plugins.push(plugin);
      plugin.install();
    }
  }

  runPlugins() {
    console.log(`\nRunning all plugins in ${this.name}`);
    this.plugins.forEach((p) => p.execute());
  }

  run() {
    super.run();
    this.runPlugins();
  }
}

// teste
const chrome = new Browser("Chrome");
const adBlock = new Plugin("AdBlock");
const darkMode = new Plugin("Dark Mode");

chrome.addPlugin(adBlock);
chrome.addPlugin(darkMode);

chrome.run();
