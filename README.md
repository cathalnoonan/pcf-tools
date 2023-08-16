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

```diff
+  <Project Sdk="Cathal.PcfTools.MSBuild.Proj/0.1.0" DefaultTargets="Build" />
```

**Note**: Replace `0.1.0` above with later versions as appropriate.

### control/

The following change should be made in the `control.pcfproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
- <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+ <Project ToolsVersion="15.0" DefaultTargets="Build" Sdk="Cathal.PcfTools.MSBuild.Control/0.1.0">
```

**Note**: Replace `0.1.0` above with later versions as appropriate.

### solution/

The following change should be made in the `solution.cdsproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
- <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+ <Project ToolsVersion="15.0" DefaultTargets="Build" Sdk="Cathal.PcfTools.MSBuild.Solution/0.1.0">
```

**Note**: Replace `0.1.0` above with later versions as appropriate.

---

## Commands

Upgrading the tools from command line:
```bash
dotnet msbuild -t:UpdatePcfToolsSdk -p:NewVersion=X.Y.Z
```

Copying template files into the projects:
```bash
dotnet msbuild -t:UpdatePcfTemplateFiles
```

Set the version number consistently throughout the project:
```bash
dotnet msbuild test -t:SetVersion -p:NewVersion=X.Y.Z
```
