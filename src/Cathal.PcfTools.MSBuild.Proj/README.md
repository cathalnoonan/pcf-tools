# Cathal.PcfTools.MSBuild.Proj

This package contains MSBuild targets to wrap the common actions for building a PowerApps Component Framework project.

The expected folder structure of the repo is as follows:
- control/
- solution/
- {project_name}.proj

## How to consume

The `.proj` file should contain the following contents:

```diff
+  <?xml version="1.0" encoding="utf-8"?>
+  <Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003" Sdk="Cathal.PcfTools.MSBuild.Proj/0.1.0" />
```

**Note**: Replace `0.1.0` above with later versions as appropriate.
