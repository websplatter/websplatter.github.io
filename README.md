# WebSplatter project page

This repository hosts the project page and interactive demo for **WebSplatter: Efficient and Faithful In-Browser 3D Gaussian Splatting across Devices via WebGPU**.

Visit [websplatter.github.io](https://websplatter.github.io/) to run the WebGPU demo.

The bundled Van Gogh Room demo uses an SPZ-compressed GLB containing 341,294 Gaussian splats.

## Reproducible demo build

The viewer implementation is pinned as the `vendor/WebSplatter` Git submodule. Generated JavaScript, CSS, and worker bundles are deployed by GitHub Actions and are not maintained as source files.

For a new clone:

```bash
git clone --recurse-submodules https://github.com/websplatter/websplatter.github.io.git
cd websplatter.github.io
npm ci --prefix vendor/WebSplatter
node scripts/build-site.mjs
python3 -m http.server 4173 --directory _site
```

For an existing clone, initialize the pinned dependency with `git submodule update --init`. The build script runs the submodule's production release target and assembles the complete site in the ignored `_site/` directory.

Upstream changes are never adopted automatically. To publish a reviewed WebSplatter revision, check out the desired commit inside `vendor/WebSplatter`, run the local build, then commit the updated submodule gitlink in this repository.

## Citing

If you use WebSplatter in academic work, please cite the ACM Multimedia 2026 paper:

```bibtex
@inproceedings{han2026websplatter,
  title={WebSplatter: Efficient and Faithful In-Browser 3D Gaussian Splatting across Devices via WebGPU},
  author={Han, Yudong and Xu, Chao and Ye, Xiaodan and Bi, Weichen and Xu, Xuanhuai and Dong, Zilong and Ma, Yun},
  booktitle={Proceedings of the 34th ACM International Conference on Multimedia},
  year={2026},
  doi={10.1145/3767308.3835220}
}
```

A machine-readable copy of this metadata lives in [`CITATION.cff`](CITATION.cff); GitHub will surface a "Cite this repository" panel automatically once the file is detected.

## License

Project page contents, layout, and CSS are released under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE). The Van Gogh Room SPZ-compressed GLB asset is bundled with permission of its authors; see the citation above for source attribution.
