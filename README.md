# PCF Tools
[![Test](https://github.com/cathalnoonan/pcf-tools/actions/workflows/test.yml/badge.svg)](https://github.com/cathalnoonan/pcf-tools/actions/workflows/test.yml) [![Release](https://github.com/cathalnoonan/pcf-tools/actions/workflows/release.yml/badge.svg)](https://github.com/cathalnoonan/pcf-tools/actions/workflows/release.yml)

## Cathal.PcfTools.Control
[![NuGet version (Cathal.PcfTools.Control)](https://img.shields.io/nuget/v/Cathal.PcfTools.Control.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.Control)](https://www.nuget.org/packages/Cathal.PcfTools.Control/)

## Cathal.PcfTools.Proj
[![NuGet version (Cathal.PcfTools.Proj)](https://img.shields.io/nuget/v/Cathal.PcfTools.Proj.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.Proj)](https://www.nuget.org/packages/Cathal.PcfTools.Proj/)

## Cathal.PcfTools.Solution
[![NuGet version (Cathal.PcfTools.Solution)](https://img.shields.io/nuget/v/Cathal.PcfTools.Solution.svg?style=flat-square&label=NuGet:+Cathal.PcfTools.Solution)](https://www.nuget.org/packages/Cathal.PcfTools.Solution/) 

---

## Setup

The repo assumes a project uses the following folder structure:
- `control/` (folder containing the PCF control, *.pcfproj)
- `solution/` (folder containing the PAC solution, *.cdsproj)
- `{project_name}.proj`

### {project_name}.proj

The `.proj` file should contain the following contents:

```diff
+  <Project Sdk="Cathal.PcfTools.Proj/1.1.0" DefaultTargets="Build" />
```

### control/

The following change should be made in the `control.pcfproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
- <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+ <Project ToolsVersion="15.0" DefaultTargets="Build" Sdk="Cathal.PcfTools.Control/1.1.0">
```

**Note**: Replace `1.1.0` above with later versions as appropriate.

### solution/

The following change should be made in the `solution.cdsproj` file:

```diff
  <?xml version="1.0" encoding="utf-8"?>
- <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
+ <Project ToolsVersion="15.0" DefaultTargets="Build" Sdk="Cathal.PcfTools.Solution/1.1.0">
```

**Note**: Replace `1.1.0` above with later versions as appropriate.

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
