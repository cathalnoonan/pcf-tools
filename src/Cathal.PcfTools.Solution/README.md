# Cathal.PcfTools.Solution

This package contains MSBuild targets to build the PowerApps Component Framework solution with the common naming format.

The name and version will be pulled from the solution.xml file and populated in the following format:
- Unmanaged solution: `{UniqueName}_{Version}.zip`
- Managed solution:   `{UniqueName}_{Version}_managed.zip`

The expected folder structure of the repo is as follows:
- control/
- solution/
- {file_name}.proj

The solution zip file that is build will be added to the `dist/` folder one level above the solution directory

## How to consume

The following change should be made in the `solution.cdsproj` file:

```diff
 <?xml version="1.0" encoding="utf-8"?>
 <Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003"
+         Sdk="Cathal.PcfTools.Solution/1.0.0">
```
