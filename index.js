const install = require("install-packages");

class InstallPackagesPlugin {
  constructor(packages) {
    this.packages = packages;
  }

  async run() {
    const { packages } = this;
    await install({
      packages,
    });
  }
}

module.exports = InstallPackagesPlugin;
