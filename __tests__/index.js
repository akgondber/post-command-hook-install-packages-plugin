"use strict";

const install = require("install-packages");
const InstallPackagesPlugin = require("../index");

jest.mock("install-packages");

describe("InstallPackagesPlugin", () => {
  let plugin = new InstallPackagesPlugin(["valtio"]);

  it("calls install for specified packages", async () => {
    await plugin.run();
    expect(install).toHaveBeenCalledWith({ packages: ["valtio"] });
  });
});
