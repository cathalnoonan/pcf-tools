# Cathal.PcfTools.Control

This package contains MSBuild targets to populate configuration files in PCF control projects

The expected folder structure of the repo is as follows:
- control/
- solution/
- {file_name}.proj

## How to consume

The following change should be made in the `control.pcfproj` file:

```diff
 <?xml version="1.0" encoding="utf-8"?>
 <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003"
+         Sdk="Cathal.PcfTools.Control/1.1.0">
```
