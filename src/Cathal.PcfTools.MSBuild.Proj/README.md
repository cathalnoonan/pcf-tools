# Cathal.PcfTools.MSBuild.Proj

This package contains MSBuild targets to wrap the common actions for building a PowerApps Component Framework project.

The expected folder structure of the repo is as follows:
- control/
- solution/
- {project_name}.proj

## How to consume

The `.proj` file should contain the following contents:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Sdk Name="Cathal.PcfTools.MSBuild.Proj" Version="0.1.15" />
</Project>
```

**Note**: Replace `0.1.15` above with later versions as appropriate.
