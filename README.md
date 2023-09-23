# PCF Tools
[![Test](https://github.com/cathalnoonan/pcf-tools/actions/workflows/test.yml/badge.svg)](https://github.com/cathalnoonan/pcf-tools/actions/workflows/test.yml) [![Release](https://github.com/cathalnoonan/pcf-tools/actions/workflows/release.yml/badge.svg)](https://github.com/cathalnoonan/pcf-tools/actions/workflows/release.yml)

## Cathal.PcfTools.MSBuild.Control
[![NuGet version (Cathal.PcfTools.MSBuild.Control)](https://img.shields.io/nuget/v/Cathal.PcfTools.MSBuild.Control.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.MSBuild.Control)](https://www.nuget.org/packages/Cathal.PcfTools.MSBuild.Control/)

## Cathal.PcfTools.MSBuild.Proj
[![NuGet version (Cathal.PcfTools.MSBuild.Proj)](https://img.shields.io/nuget/v/Cathal.PcfTools.MSBuild.Proj.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.MSBuild.Proj)](https://www.nuget.org/packages/Cathal.PcfTools.MSBuild.Proj/)

## Cathal.PcfTools.MSBuild.Solution
[![NuGet version (Cathal.PcfTools.MSBuild.Solution)](https://img.shields.io/nuget/v/Cathal.PcfTools.MSBuild.Solution.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.MSBuild.Solution)](https://www.nuget.org/packages/Cathal.PcfTools.MSBuild.Solution/)

---

## Setup

The repo assumes a project uses the following folder structure:
- `control/` (folder containing the PCF control, *.pcfproj)
- `solution/` (folder containing the PAC solution, *.cdsproj)
- `{project_name}.proj`

### {project_name}.proj

The `.proj` file should contain the following contents:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <Sdk Name="Cathal.PcfTools.MSBuild.Proj" Version="0.1.9" />
</Project>
```

**Note**: Replace `0.1.9` above with later versions as appropriate.

### control/

The following change should be made in the `control.cdsproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
  <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+     <Sdk Name="Cathal.PcfTools.MSBuild.Control" Version="0.1.9" />
```

**Note**: Replace `0.1.9` above with later versions as appropriate.

### solution/

The following change should be made in the `solution.cdsproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
  <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+     <Sdk Name="Cathal.PcfTools.MSBuild.Solution" Version="0.1.9" />
```

**Note**: Replace `0.1.9` above with later versions as appropriate.

---

## Commands

The following commands can be run from the folder where the `{project_name}.proj` file exists:

- Build the control / solution:
  ```bash
  dotnet build
  ```

- Updating the PAC package versions used by the project:
  (replace `X.Y.Z` with the updated version number with the version of the `pcf-scripts` package to install)
  ```bash
  dotnet msbuild -t:UpdatePcfPackagesVersion -p:NewVersion=X.Y.Z
  ```

- Upgrading the tools from command line:
  (replace `X.Y.Z` with the updated version number of this project)
  ```bash
  dotnet msbuild -t:UpdatePcfToolsSdk -p:NewVersion=X.Y.Z
  ```

- Copying template files into the projects:
  ```bash
  dotnet msbuild -t:UpdatePcfTemplateFiles
  ```

- Set the version number consistently throughout the project:
  (replace `X.Y.Z` with the version you would like to set your control to)
  ```bash
  dotnet msbuild -t:SetVersion -p:NewVersion=X.Y.Z
  ```
