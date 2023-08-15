# Cathal.PcfTools.Proj

This package contains MSBuild targets to wrap the common actions for building a PowerApps Component Framework project.

The expected folder structure of the repo is as follows:
- control/
- solution/
- {file_name}.proj

The `.proj` file should contain the following contents:

```xml
<Project Sdk="Cathal.PcfTools.Proj/1.1.0" DefaultTargets="Build" />
```
