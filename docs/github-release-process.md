# GitHub Release Process

Rather than creating a release through the GitHub UI, instead tag the commit and push the tag.

```sh
git checkout main
git pull
git tag vX.Y.Z
git push origin vX.Y.Z
```

This will trigger a GitHub Action that will publish a `Draft release`.

This release will be created in a Draft state, without a description.

The description must be manually updated on the release.

This release must be marked as published once the packages are available from [nuget.org](https://www.nuget.org/packages?q=Cathal.PcfTools&includeComputedFrameworks=true&prerel=true&sortby=relevance).

At this point, another GitHub Action will run that will create a Pull Request in the known consuming repositories.
