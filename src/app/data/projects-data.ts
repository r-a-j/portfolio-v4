import { ProjectDetails } from '../shared/types/project-details';

export const PROJECTS: ProjectDetails[] = [
    {
        id: 'metal-nonmetal-classification',
        title: 'Particle Classification & Segmentation (VDA 19.1)',
        description: 'Deep learning classification and segmentation of metallic, non-metallic, and fiber particles across microscope and mobile images, from TU Dortmund PoC to production at PartikelART.',
        thumbnail: 'projects/metal-nonmetal-classification/metal-nonmetal-classification_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Particle-Classification-and-Segmentation',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Particle-Classification-and-Segmentation/refs/heads/main/README.md',
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'YOLOv8', 'U-Net', 'OpenCV', 'Gradio', 'TypeScript'],
        rating: 5,
        category: 'Deep Learning',
        year: 2024,
        language: 'Python',
        caseStudy: {
            context: 'TU Dortmund · Industrial Data Science 2',
            role: 'Team of 5 · U-Net, Mobile CNN & Gradio App',
            subtitle:
                'Classifying metallic and non-metallic contaminants across high-resolution microscope images and low-resolution smartphone photos. This university project led directly to my 2-year engineering role at PartikelART Solution GmbH.',
            metrics: [
                {
                    value: '54,540',
                    label: 'Particle Images',
                    detail: '53,880 microscope crops (19,206 metal, 34,674 non-metal) plus 660 mobile phone captures provided by PartikelART.',
                },
                {
                    value: '97% / 88%',
                    label: 'CNN Val Accuracy',
                    detail: 'Custom 128×128 grayscale CNN hit 97% (AP 0.97–1.00) on microscope images; fine-tuned MobileNetV2 reached 88% on mobile.',
                },
                {
                    value: '0.82 mAP@0.5',
                    label: 'YOLOv8n Detection',
                    detail: '0.756 mAP@0.5 on microscope detection, 0.717 mask mAP@0.5 on instance segmentation, and 0.820 mAP@0.5 on mobile.',
                },
                {
                    value: '1st Place',
                    label: 'Hired & Award-Winning',
                    detail: 'PartikelART co-founder Dr.-Ing. Ronny Zwinkau hired me after the final presentation; we later won 1st Place at TU Start-up Award 2025.',
                },
            ],
            problem:
                'In automotive, battery, and electronics manufacturing, microscopic metal chips and stray fibers left on components can cause short circuits or premature wear. Traditional technical cleanliness checks depend on lab microscopes and slow manual inspection. Partnering with PartikelART Solution GmbH, our 5-student team tested whether lightweight vision models could classify and segment metal vs. non-metal particles across two very different domains: 53,880 high-resolution microscope images and just 660 low-resolution mobile phone captures.',
            ownership:
                'Within Group 3 (5 M.Sc. Data Science students), I built and iterated on the custom Keras U-Net segmentation pipeline (including scripts converting YOLO bounding boxes into binary masks across 5 training runs with LR scheduling and augmentation), trained and exported the MobileNetV2 transfer-learning classifier to TensorFlow Lite, and wrote the Gradio web app combining YOLOv8 detection, OpenCV contour-based CNN inference, and a 17-transform augmentation utility. I also wrote the individual evaluation report comparing the trained architectures.',
            approachHeading: 'Data, Models & Evaluation',
            approach: [
                {
                    label: '01 · Data & Labeling',
                    title: 'Microscope vs. Mobile Phone Domains',
                    description:
                        'Standardized microscope crops to 128×128 grayscale for CNN training with geometric augmentation (rotation, shifts, shear, zoom, flips). Manually labeled 1,024 full images at 640×640 with bounding boxes and masks in makesense.ai (70/15/15 split) for YOLOv8 and U-Net.',
                },
                {
                    label: '02 · Model Comparison',
                    title: 'CNN, MobileNetV2, YOLOv8n & U-Net',
                    description:
                        'Benchmarked a 3-block Conv2D + BatchNorm + Dropout CNN on microscope crops, two-stage frozen/fine-tuned MobileNetV2 on mobile captures (with TFLite export), YOLOv8n for detection and instance segmentation, and a scratch 640×640 U-Net for binary masks.',
                },
                {
                    label: '03 · Demo & Error Analysis',
                    title: 'Gradio Prototype & Failure Diagnosis',
                    description:
                        'Packaged inference into a 3-tab Gradio interface for interactive image testing and augmentation. Audited validation curves and failure cases across reflective non-metals, dense filter backgrounds, and the tiny mobile sample split.',
                },
            ],
            resultsTable: {
                title: 'University PoC Benchmark (IDS 2)',
                subtitle:
                    'Comparison across high-resolution microscope images (53,880 crops) and low-resolution mobile captures (660 images).',
                columns: ['Model', 'Image Source', 'Train Acc', 'Val Acc / mAP@0.5', 'Val Loss'],
                rows: [
                    {
                        cells: ['Custom CNN (128×128 Grayscale)', 'Microscope (53,880)', '97%', '97% (AP 0.97 / 1.00)', '0.20'],
                        highlight: true,
                    },
                    {
                        cells: ['MobileNetV2 (Two-Stage Fine-Tune)', 'Mobile Phone (660)', '93%', '88%', '0.30'],
                    },
                    {
                        cells: ['YOLOv8n (Object Detection)', 'Microscope (100 ep.)', '75%', '75% · 0.756 mAP@0.5', '3.32'],
                    },
                    {
                        cells: ['YOLOv8n (Instance Segmentation)', 'Microscope (100 ep.)', '71%', '71% · 0.717 Mask mAP', '1.61'],
                    },
                    {
                        cells: ['YOLOv8n (Object Detection)', 'Mobile Phone (200 ep.)', '66%*', '0.820 mAP@0.5 (peak ep. 144)', '1.41'],
                    },
                    {
                        cells: ['Custom U-Net (Box-Derived Masks)', 'Mobile Phone (50 ep.)', '49–55%', '32–92% (unstable)', '0.28'],
                    },
                ],
                footnote:
                    '*Mobile YOLOv8n peaked at 0.825 mAP@0.5 at epoch 144 before overfitting by epoch 200 (0.665 mAP@0.5), exposing the 660-image data bottleneck. U-Net trained on masks approximated from rectangular YOLO boxes oscillated heavily across epochs.',
            },
            figuresHeading: 'Validation Predictions & Curves',
            figuresIntro:
                'Unedited validation batches and evaluation curves from the TU Dortmund IDS 2 repository. Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/metal-nonmetal-classification/yolo-microscope-segment.webp',
                    badge: 'YOLOv8n-Seg · Microscope',
                    title: 'Microscope Instance Segmentation',
                    caption:
                        'Pixel masks on textured filter membranes isolating a reflective metallic flake (metal 0.9) and a looped non-metal fiber strand.',
                    surface: 'dark',
                },
                {
                    src: 'projects/metal-nonmetal-classification/yolo-mobile-detect.webp',
                    badge: 'YOLOv8n · Mobile',
                    title: 'Mobile Phone Detection Batch',
                    caption:
                        'Validation predictions on smartphone photos detecting spiral metal shavings, rings, and chips alongside non-metal fragments.',
                    surface: 'dark',
                },
                {
                    src: 'projects/metal-nonmetal-classification/yolo-microscope-detect.webp',
                    badge: 'YOLOv8n · Microscope',
                    title: 'Microscope Detection Grid (4×4)',
                    caption:
                        'Holdout microscope batch showing solid detection on isolated metallic particles and overlapping boxes on dark clustered debris.',
                    surface: 'dark',
                },
                {
                    src: 'projects/metal-nonmetal-classification/cnn-microscope-pr-curve.webp',
                    badge: 'Custom CNN · PR Curve',
                    title: 'CNN Precision-Recall (Microscope)',
                    caption:
                        'Average Precision of 0.97 for metal (met) and 1.00 for non-metal (nichtmet) on the microscope holdout split.',
                    surface: 'light',
                },
                {
                    src: 'projects/metal-nonmetal-classification/yolo-mobile-pr-curve.webp',
                    badge: 'YOLOv8n · PR Curve',
                    title: 'YOLOv8n Precision-Recall (Mobile)',
                    caption:
                        'Peak mobile detection performance reaching 0.820 mAP@0.5 (0.834 metal, 0.806 non-metal) from 660 phone captures.',
                    surface: 'light',
                },
                {
                    src: 'projects/metal-nonmetal-classification/unet-training-curves.webp',
                    badge: 'U-Net · Diagnostics',
                    title: 'U-Net Instability Diagnostics',
                    caption:
                        'Training loss dropped smoothly while validation accuracy swung from 32% to 92%, directly showing why box-derived masks fail on fine particle contours.',
                    surface: 'light',
                },
            ],
            followUp: {
                eyebrow: 'Oct 2024 – Nov 2026 · Production Continuation',
                title: 'How This Grew Into Production at PartikelART',
                intro:
                    'During the final Industrial Data Science 2 presentation, PartikelART co-founder Dr.-Ing. Ronny Zwinkau was sitting in the audience. Based on the results and the next-step architecture ideas I presented, he brought me onto the startup in October 2024 as a Machine Learning & Software Engineer, and in 2025 our team went on to win 1st Place at the TU Start-up Award. Moving from a classroom prototype to VDA 19.1 / ISO 16232 factory inspection exposed four practical problems that standard bounding boxes could not handle:',
                items: [
                    {
                        title: '5–10 µm Small Particles via Tiled U²-Net & ONNX',
                        description:
                            'Downsampling full filter scans wiped out sub-10 µm contaminants. Switched to multi-scale patchified U²-Net / U²-NetP models in PyTorch with overlapping sliding-window inference and ONNX export for mobile and server use.',
                        tags: ['PyTorch', 'U²-Net', 'ONNX', 'Tiled Inference'],
                    },
                    {
                        title: 'Curved Fiber Length via Zhang-Suen Skeletonization',
                        description:
                            'Bounding boxes badly underestimate coiled or S-shaped fibers. Implemented Zhang-Suen topological thinning with precomputed 256-entry static LUTs in OpenCV/TypeScript alongside Feret Max/Min rotating calipers and inscribed-circle checks.',
                        tags: ['OpenCV', 'TypeScript', 'Zhang-Suen LUT', 'VDA 19.1'],
                    },
                    {
                        title: 'Cross-Polarization & Post-Inference HSV Recovery',
                        description:
                            'Pure RGB networks confused shiny plastics with metal and dropped faint translucent fibers. Added polarized vs. non-polarized gloss photometry with local background gain normalization plus HSV saturation and inverted-value mask refinement.',
                        tags: ['Photometry', 'HSV Refinement', 'Morphology'],
                    },
                    {
                        title: 'Active Learning With SAM 2.1 & Label Studio (~10× Faster)',
                        description:
                            'Hand-tracing dense filters took hours per scan. Built a custom Label Studio ML backend combining SAM 2.1 interactive masks, in-house U-Net pre-annotations with Douglas-Peucker polygon simplification, and Azure Blob retraining sync.',
                        tags: ['SAM 2.1', 'Label Studio', 'Azure Blob', 'Active Learning'],
                    },
                ],
            },
            takeaways: [
                'Crop-level classification is much easier than full-frame detection: the custom CNN reached 97% on pre-cropped microscope particles, while YOLOv8n sat at 0.756 mAP@0.5 because textured filter backgrounds add localization noise.',
                'Label quality matters more than architecture tweaks: training U-Net on masks approximated from rectangular YOLO boxes caused 32%–92% validation swings. Accurate polygon and SAM masks later proved essential in production.',
                'Small datasets overfit quickly without checkpoint selection: mobile YOLOv8n peaked at 0.825 mAP@0.5 around epoch 144 and fell to 0.665 by epoch 200.',
                'Industrial computer vision under VDA 19.1 rarely stops at neural inference. Deterministic geometry (Feret calipers, skeleton length) and optical physics (cross-polarization) were what made measurements reliable on real parts.',
            ],
        },
    },
    {
        id: 'cine-scope',
        title: 'CineScope',
        description: 'Movie and TV discovery app for Android and Web with Gemini semantic search, share-to-inbox capture, swipe triage, and local RxDB watchlist storage.',
        thumbnail: 'projects/cinescope/cinescope_thumb.png',
        statusBadge: 'Live Web App • Play Beta',
        externalLinks: [
            {
                label: 'Live Web App',
                url: 'https://cinescope-rho.vercel.app/tabs/discover',
                icon: 'fa-solid fa-play',
                style: 'primary',
            },
            {
                label: 'User Guide',
                url: 'https://docs-ten-pi-73.vercel.app/users/',
                icon: 'fa-solid fa-book-open',
                style: 'secondary',
            },
            {
                label: 'Privacy Policy',
                url: 'https://docs-ten-pi-73.vercel.app/users/privacy-policy',
                icon: 'fa-solid fa-shield-halved',
                style: 'secondary',
            },
        ],
        techStack: ['Android', 'Angular', 'Ionic', 'Capacitor', 'Google Gemini', 'RxDB', 'TypeScript'],
        rating: 5,
        category: 'Android',
        year: 2026,
        language: 'TypeScript',
        showcase: {
            tagline: 'Movie & TV Discovery, AI Search, and Local Watchlist App for Android & Web',
            versionBadge: 'v2.1.5',
            brandIcon: 'projects/cinescope/app-icon.png',
            wordmark: 'projects/cinescope/wordmark.svg',
            heroBanner: 'projects/cinescope/visuals/inbox-hero.png',
            heroPreviewScreenshot: 'projects/cinescope/screenshots/02-discover.jpg',
            liveDemoUrl: 'https://cinescope-rho.vercel.app/tabs/discover',
            liveDemoTitle: 'Try CineScope Live',
            liveDemoDescription:
                'Launch the live Ionic/Angular web build directly inside a mobile viewport frame, or open it in a full tab. Catalog search, streaming lookups, and Gemini queries hit the live API while your watchlist persists locally in IndexedDB.',
            liveDemoPrompts: [
                'Try natural-language search like "movie list that has anirudh music"',
                'Open any movie or TV series to inspect cast, crew, and regional OTT providers',
                'Add titles to your Watchlist or Watched tab, stored locally with zero login',
            ],
            overview:
                'CineScope is an Android and Web app for discovering, saving, and organizing movies and TV series. Built with Angular, Ionic, Capacitor, and a dedicated stateless API for TMDB/Gemini queries, it lets you search naturally, forward recommendations from chats or screenshots into a swipeable inbox, and keep your entire personal watchlist strictly on-device in RxDB.',
            metrics: [
                {
                    value: 'Local RxDB',
                    label: 'On-Device Watchlist Storage',
                    detail: 'Your watchlist, watch history, and JSON backups stay in local IndexedDB with no account wall or cloud profile.',
                    icon: 'fa-solid fa-database',
                },
                {
                    value: 'Gemini AI',
                    label: 'Text & Screenshot Extraction',
                    detail: 'Search by mood, composer, or plot description, and extract candidate titles from shared messages or screenshots.',
                    icon: 'fa-solid fa-wand-magic-sparkles',
                },
                {
                    value: 'No Tracking',
                    label: 'Zero Accounts or Ads',
                    detail: 'No login, no ad SDKs, and no behavioral analytics. The API mediates search and AI calls without storing user libraries.',
                    icon: 'fa-solid fa-user-shield',
                },
                {
                    value: 'Web + Android',
                    label: 'Live Web & Play Closed Beta',
                    detail: 'Deployed live on the web and packaged for Android with custom Capacitor Share Intent and Play In-App Update plugins.',
                    icon: 'fa-brands fa-android',
                },
            ],
            screenshots: [
                {
                    src: 'projects/cinescope/screenshots/02-discover.jpg',
                    badge: 'Discover',
                    title: 'Discover & Trending Feed',
                    caption: 'Trending spotlight, daily popular releases, and theatrical movies filtered by regional preferences.',
                },
                {
                    src: 'projects/cinescope/screenshots/01-ai-search.jpg',
                    badge: 'Gemini Search',
                    title: 'Natural-Language Search',
                    caption: 'Query by composer, vibe, or partial memory (such as "movie list that has anirudh music") resolved to catalog cards.',
                },
                {
                    src: 'projects/cinescope/screenshots/04-movie-details.jpg',
                    badge: 'Movies',
                    title: 'Movie Details & Credits',
                    caption: 'Certifications, trailers, Director/Writer/Music/Cinematography credits, cast portraits, and quick watchlist actions.',
                },
                {
                    src: 'projects/cinescope/screenshots/06-tv-details.jpg',
                    badge: 'TV & OTT',
                    title: 'TV Series & Where to Watch',
                    caption: 'Network info, season counts, creator credits, and region-aware streaming availability badges.',
                },
                {
                    src: 'projects/cinescope/screenshots/07-episode-guide.jpg',
                    badge: 'Episodes',
                    title: 'Season & Episode Guide',
                    caption: 'Episode-by-episode list with ratings, finale markers, guest stars, and writing/directing credits.',
                },
                {
                    src: 'projects/cinescope/screenshots/08-watchlist-grid.jpg',
                    badge: 'Local Library',
                    title: '4-Column Watchlist Archive',
                    caption: 'Fast local poster grid handling 300+ saved titles stored in RxDB with instant search, filtering, and sorting.',
                },
                {
                    src: 'projects/cinescope/screenshots/09-watched-history.jpg',
                    badge: 'History',
                    title: 'Watched Log',
                    caption: 'Personal log of completed films and shows used locally to drive on-device taste recommendations.',
                },
            ],
            spotlightHeading: 'Share-to-Inbox Capture & Swipe Triage',
            spotlightIntro:
                'Movie recommendations usually get lost in WhatsApp threads, social posts, or screenshots. On Android, CineScope plugs into the OS Share Sheet so you can queue and triage recommendations in a few seconds.',
            spotlights: [
                {
                    src: 'projects/cinescope/visuals/multimodal-extraction.png',
                    eyebrow: 'Android Share Intent + Vision',
                    title: 'Extract Titles from Chats & Screenshots',
                    description:
                        'Share text or poster screenshots into CineScope from any Android app. Gemini parses candidate titles, checks for duplicates against your local RxDB library, and attaches full metadata before queuing them in your Inbox.',
                },
                {
                    src: 'projects/cinescope/visuals/swipe-triage.png',
                    eyebrow: 'Gesture Stack',
                    title: 'Swipe-to-Triage Deck',
                    description:
                        'Review queued titles with swipe gestures and haptic feedback: swipe right for Watchlist, up for Watched, or left to Discard, with instant undo.',
                },
            ],
            highlights: [
                {
                    title: 'Semantic & Composer-Based Search',
                    description:
                        'Search beyond exact titles using directors, music composers, themes, or vague plot recollections, grounded against real TMDB entries.',
                    icon: 'fa-solid fa-magnifying-glass',
                    tags: ['Google Gemini', 'Semantic Search', 'TMDB Grounding'],
                },
                {
                    title: 'Android Share Sheet & AI Inbox',
                    description:
                        'Custom Android intent handling receives shared text and images from messaging or social apps and turns them into structured review cards.',
                    icon: 'fa-solid fa-inbox',
                    tags: ['Android Intents', 'Vision AI', 'Capacitor'],
                },
                {
                    title: 'Local "For You" Ranking',
                    description:
                        'Computes genre, language, decade, and creator affinities locally from your watched history and triage decisions without uploading a user profile.',
                    icon: 'fa-solid fa-sliders',
                    tags: ['Local Ranking', 'Personalization', 'Privacy'],
                },
                {
                    title: 'Franchise & Collection Tracking',
                    description:
                        'Groups sequels, trilogies, and multi-part series so you can check release order and see which installments you still need to watch.',
                    icon: 'fa-solid fa-layer-group',
                    tags: ['Collections', 'Progress Tracking', 'Metadata'],
                },
                {
                    title: 'Regional Streaming & Episode Guides',
                    description:
                        'Displays country-specific OTT availability alongside full cast, key creative crew credits, trailers, and season-by-season episode breakdowns.',
                    icon: 'fa-solid fa-tv',
                    tags: ['OTT Providers', 'Episode Guides', 'Regional Cinema'],
                },
                {
                    title: 'Native Android Release Engineering',
                    description:
                        'Includes Google Play In-App Updates, post-update "What\'s New" release notes, authenticated API request guards, and portable JSON library backup/restore.',
                    icon: 'fa-solid fa-mobile-screen-button',
                    tags: ['Play Core SDK', 'In-App Updates', 'Signed AAB'],
                },
            ],
            architectureIntro:
                'Designed with a strict split between local personal state and stateless cloud APIs: your watchlists stay on-device while live search, streaming lookups, and Gemini inference run through a hardened serverless gateway.',
            architecture: [
                {
                    layer: 'Client & Android',
                    title: 'Angular + Ionic App & Capacitor Plugins',
                    description:
                        'Standalone Angular frontend with reactive state, gesture triage, haptics, Android Share Intent ingestion, and Google Play Core in-app update bindings.',
                    technologies: ['Angular', 'Ionic', 'Capacitor', 'Android Java/Kotlin'],
                },
                {
                    layer: 'Local Storage',
                    title: 'On-Device RxDB Library Store',
                    description:
                        'RxDB collections persisted in IndexedDB provide fast filtering and sorting over saved watchlists and watched history, plus portable JSON import/export.',
                    technologies: ['RxDB', 'IndexedDB', 'RxJS', 'JSON Backup'],
                },
                {
                    layer: 'API Proxy',
                    title: 'Stateless AI & Metadata API',
                    description:
                        'Stateless serverless proxy handling origin allowlisting, client authentication, rate limiting, TMDB/OTT lookups, and Gemini extraction without storing user data.',
                    technologies: ['Serverless API', 'Google Gemini', 'TMDB', 'Rate Limiting'],
                },
                {
                    layer: 'Build & Release',
                    title: 'Signed Play Bundles & Public User Guide',
                    description:
                        'CI checks with linting and typechecking, Play App Signing for Android `.aab` releases, live Vercel web hosting, and a standalone user documentation site.',
                    technologies: ['Play App Signing', 'CI/CD', 'Vercel', 'Docusaurus'],
                },
            ],
            availabilityNote:
                'CineScope is a closed-source product available live on the web and in Google Play Closed Testing. Source code and backend infrastructure remain private.',
        },
    },
    {
        id: 'applied-bayesian-data-analysis',
        title: 'Bayesian Hierarchical Modeling of Arctic Sea Ice',
        description: 'Spatio-temporal Bayesian modeling of NSIDC Arctic sea ice extent across 14 regions (1979–2023), comparing No-AR and AR(1) hierarchical models in Stan/brms with LOO-CV and prior sensitivity checks.',
        thumbnail: 'projects/applied-bayesian-data-analysis/applied-bayesian-data-analysis_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Applied-Bayesian-Data-Analysis',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Applied-Bayesian-Data-Analysis/refs/heads/main/README.md',
        techStack: ['R', 'Stan', 'brms', 'Python', 'LOO-CV', 'bayesplot', 'ggplot2', 'data.table'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2025,
        language: 'R',
        caseStudy: {
            context: 'TU Dortmund · Applied Bayesian Data Analysis',
            role: 'Team of 2 · Prof. Paul Bürkner & Prof. Katja Ickstadt',
            subtitle:
                'Modeling 45 years of NSIDC satellite sea ice measurements across 14 Arctic subregions in Stan and brms to separate long-term decline from regional baselines and year-to-year persistence.',
            metrics: [
                {
                    value: '+73.3 ELPD',
                    label: 'AR(1) vs. No-AR (LOO-CV)',
                    detail: 'SE = 27.6 (> 2.65 SE), showing strong predictive improvement when modeling year-to-year residual autocorrelation.',
                },
                {
                    value: 'φ = 0.58',
                    label: 'Lag-1 Persistence',
                    detail: '95% credible interval [0.50, 0.66], confirming that sea ice anomalies persist strongly across consecutive years.',
                },
                {
                    value: '14 Regions',
                    label: 'NSIDC Satellite Record',
                    detail: '28 regional CSV files (1979–2023) merged in Python and modeled as annual log sea ice extent across the Arctic.',
                },
                {
                    value: 'R-hat = 1.00',
                    label: 'Clean MCMC Convergence',
                    detail: '2 HMC chains × 4,000 iterations (ESS 900–2,200), validated across two prior sets with zero post-warmup divergences.',
                },
            ],
            problem:
                'Arctic sea ice extent is a core indicator of climate change, but collapsing satellite measurements into a single global trend masks stark regional differences. The Central Arctic stays heavily ice-covered while the Barents and Kara Seas are declining steeply, and ice extent in one year carries over into the next. Treating regions as independent or ignoring temporal autocorrelation produces overconfident intervals and weaker out-of-sample predictions.',
            ownership:
                'Completed as a two-person M.Sc. Data Science project (with Harsh Rana) in Prof. Paul Bürkner (creator of brms) and Prof. Katja Ickstadt\'s Applied Bayesian Data Analysis course at TU Dortmund. I built the Python/pandas ETL script merging all 28 raw NSIDC regional CSVs into a unified dataset, led the exploratory data analysis and ggplot2 diagnostics in R, implemented the brms/Stan No-AR vs. AR(1) and prior sensitivity scripts, and ran the PSIS-LOO model comparison and convergence checks.',
            approachHeading: 'Data Pipeline, Hierarchical Models & Validation',
            approach: [
                {
                    label: '01 · Data Pipeline & EDA',
                    title: '28 NSIDC CSVs to Log Annual Extent',
                    description:
                        'Merged 28 NSIDC Sea Ice Index v3.0 files (14 regions, area and extent) in Python/pandas. Filtered to sea ice extent (>= 15% ice concentration), aggregated monthly records into annual regional means in R (data.table), and applied a natural log transform to handle strong right skew.',
                },
                {
                    label: '02 · Hierarchical Stan / brms Models',
                    title: 'Baseline No-AR vs. AR(1) Residuals',
                    description:
                        'Fit two Gaussian hierarchical models on log(Sea Ice Extent) with region-specific random intercepts (1 | Region) and a global time slope: an independent-residuals baseline (No-AR) and a lag-1 autoregressive model cor_ar(~ Year | Region, p = 1) capturing temporal persistence.',
                },
                {
                    label: '03 · Diagnostics & Prior Sensitivity',
                    title: 'LOO-CV, PPC & Alternative Priors',
                    description:
                        'Assigned explicit proper priors to every parameter and refit both models with narrower alternative priors to test sensitivity. Verified HMC mixing via R-hat, ESS, and trace plots, checked distributional fit with posterior predictive density overlays (bayesplot), and compared predictive accuracy via PSIS-LOO.',
                },
            ],
            resultsTable: {
                title: 'Posterior Estimates, Convergence & LOO-CV Comparison',
                subtitle:
                    'Fit in brms/Stan using 2 HMC chains × 4,000 iterations (2,000 warmup, adapt_delta = 0.99, max_treedepth = 15).',
                columns: ['Model Specification', 'Time Slope β1 (95% CI)', 'AR(1) φ (95% CI)', 'Residual σ', 'R-hat / Min ESS', 'LOO ELPD Diff (SE)'],
                rows: [
                    {
                        cells: ['Hierarchical AR(1) (Default Priors)', '-0.05 [-0.07, -0.03]', '0.58 [0.50, 0.66]', '0.14', '1.00 / 1,200', '0.0 (Best)'],
                        highlight: true,
                    },
                    {
                        cells: ['Hierarchical No-AR (Default Priors)', '-0.01 [-0.01, -0.01]', 'None (0)', '0.16', '1.00 / 900', '-73.3 (SE 27.6)'],
                    },
                    {
                        cells: ['Alternative Narrower Priors Check', 'Minimal shift', 'Minimal shift', 'Unchanged', '1.00 / Stable', 'Identical ranking'],
                    },
                ],
                footnote:
                    'Default priors: Intercept N(0, 5), Slope N(0, 2), sigma & sd Exponential(0.1), AR phi N(0, 0.5). Alternative priors: Intercept N(0, 3), Slope N(0, 1), sigma & sd Exponential(0.2), AR phi N(0, 0.3). Because Year entered uncentered, parameter scales differ between No-AR and AR(1), so model selection focused on out-of-sample LOO predictive density.',
            },
            figuresHeading: 'Exploratory Plots & Bayesian Diagnostics',
            figuresIntro:
                'Direct ggplot2 and bayesplot figures generated from the R/Stan repository scripts. Click any plot to inspect full resolution.',
            figures: [
                {
                    src: 'projects/applied-bayesian-data-analysis/overall-sea-ice-trend.webp',
                    badge: 'NSIDC · Time Series',
                    title: 'Overall Mean Arctic Sea Ice Extent (1979–2023)',
                    caption:
                        'Aggregated regional mean sea ice extent drops sharply after 2000 (from ~900,000 km² in 1979 to ~720,000–760,000 km² post-2015) alongside noticeable interannual swings.',
                    surface: 'light',
                },
                {
                    src: 'projects/applied-bayesian-data-analysis/regional-trends-facets.webp',
                    badge: '14 Arctic Regions',
                    title: 'Regional Trajectories on Log Scale',
                    caption:
                        'Faceted trends show steep declines in the Barents and Kara Seas, relative stability in the Central Arctic and Canadian Archipelago, and high volatility in Bering and St. Lawrence.',
                    surface: 'light',
                },
                {
                    src: 'projects/applied-bayesian-data-analysis/regional-correlation-matrix.webp',
                    badge: 'Spatial Clustering',
                    title: 'Pairwise Correlation Matrix Across Regions',
                    caption:
                        'Barents, Kara, Laptev, and East Siberian seas move closely together (r > 0.7), while Bering correlates weakly (r = 0.1 to 0.3) with most other regions.',
                    surface: 'light',
                },
                {
                    src: 'projects/applied-bayesian-data-analysis/regional-boxplots.webp',
                    badge: 'Hierarchical Motivation',
                    title: 'Sea Ice Extent Distribution by Region',
                    caption:
                        'Large baseline spread across regions (Central Arctic above 3M km² versus Bering and St. Lawrence near the bottom) directly justified modeling Region as a hierarchical random effect.',
                    surface: 'light',
                },
                {
                    src: 'projects/applied-bayesian-data-analysis/ppc-ar1-model.webp',
                    badge: 'bayesplot · PPC',
                    title: 'Posterior Predictive Check (AR(1) Model)',
                    caption:
                        'Simulated posterior predictive draws (y_rep) closely track the multimodal log-extent density across the 14 Arctic subregions.',
                    surface: 'light',
                },
                {
                    src: 'projects/applied-bayesian-data-analysis/ar1-trace-plots.webp',
                    badge: 'Stan HMC · Convergence',
                    title: 'MCMC Trace Plots (AR(1) Model)',
                    caption:
                        'Both HMC chains mix cleanly across intercept, slope, regional SD, residual sigma, and ar[1] with R-hat = 1.00 and zero post-warmup divergences.',
                    surface: 'light',
                },
            ],
            takeaways: [
                'Modeling temporal persistence made a decisive difference: adding an AR(1) residual structure (phi = 0.58, 95% CI [0.50, 0.66]) gained +73.3 ELPD units (SE = 27.6) over an independent-error hierarchical model.',
                'Inferences held steady under prior tightening: refitting both models with narrower normal and exponential priors barely shifted posterior means or credible intervals and preserved the exact LOO ranking.',
                'Two observations in the AR(1) model produced Pareto k > 0.7 (1.16 and 1.09) during LOO cross-validation. While unlikely to overturn a 2.65-SE margin, moment matching or partial reloo is the right way to refine influential points.',
                'Natural modeling extensions for follow-up work: centering Year around 2000 for interpretable intercepts, adding region-specific random slopes (1 + Year_c | Region) to estimate distinct regional decline rates, and modeling monthly seasonal curves with splines or Gaussian processes.',
            ],
        },
    },
    {
        id: 'simulation-based-inference',
        title: 'Simulation-Based Inference for LIF Neurons',
        description: 'Amortized neural posterior estimation for a 6-parameter Leaky Integrate-and-Fire neuron simulator in BayesFlow 2, evaluating parameter recovery, calibration, and passive-parameter identifiability.',
        thumbnail: 'projects/simulation-based-inference/simulation-based-inference_thumb.webp',
        githubLink: 'https://github.com/r-a-j/simulation-based-inference',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/simulation-based-inference/refs/heads/main/README.md',
        techStack: ['Python', 'BayesFlow', 'TensorFlow', 'Keras', 'CouplingFlow', 'SciPy', 'NumPy', 'Matplotlib'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2025,
        language: 'Python',
        caseStudy: {
            context: 'TU Dortmund · Simulation-Based Inference',
            role: 'Team of 3 · Prof. Dr. Paul Bürkner',
            subtitle:
                'Training an amortized neural posterior estimator (CNN + GRU summary network and CouplingFlow) in BayesFlow 2 to infer six biophysical Leaky Integrate-and-Fire neuron parameters directly from 50 ms voltage traces without an explicit likelihood.',
            metrics: [
                {
                    value: 'r >= 0.998',
                    label: '4 Threshold & Reset Params',
                    detail: 'Held-out test recovery (400 traces, 1,000 posterior draws each): E_L = 1.000, V_res = 1.000, t_ref = 0.999, V_th = 0.998.',
                },
                {
                    value: '10,000 Traces',
                    label: 'Offline Simulation Budget',
                    detail: '8,000 train / 2,000 validation plus 400 unseen test traces (50 ms window at 0.1 ms step = 501 voltage samples).',
                },
                {
                    value: 'val_loss -8.14',
                    label: 'Epoch 95 Best Checkpoint',
                    detail: 'Trained 100 epochs (Adam, batch 64, ReduceLROnPlateau) on an RTX 3070 Laptop GPU with clean convergence and no overfitting.',
                },
                {
                    value: 'Cm & g_L',
                    label: 'Identifiability Diagnosed',
                    detail: 'Passive parameters drop to r = 0.491 and r = 0.046 with near-zero contraction, exposing structural confounding via tau_m = Cm/g_L.',
                },
            ],
            problem:
                'Mechanistic neuron models like Leaky Integrate-and-Fire (LIF) are straightforward to simulate forward, but discrete spike thresholds, voltage resets, refractory holdouts, and stochastic colored synaptic currents make the analytical likelihood intractable for standard MCMC. Simulation-based inference (SBI) bypasses the likelihood by learning a neural posterior directly from simulated parameter-trace pairs, while also showing which biophysical parameters are genuinely identifiable from voltage recordings alone.',
            ownership:
                'Completed in a 3-person M.Sc. Data Science group (with Harsh Rana and Siddhartha Karki) in Prof. Dr. Paul Bürkner\'s Simulation-Based Inference course at TU Dortmund (Aug 2025). I authored and ran the full Python pipeline in the repository: implementing the LIF Euler integrator, ordered biophysical prior sampler (V_res < E_L < V_th), colored synaptic current generator, BayesFlow 2 TimeSeriesNetwork + CouplingFlow training script on GPU, and all recovery, SBC, contraction, and predictive check diagnostics.',
            approachHeading: 'Simulator, Amortized Estimator & Diagnostics',
            approach: [
                {
                    label: '01 · Forward LIF Simulator',
                    title: '6 Biophysical Priors & Colored Input',
                    description:
                        'Simulated 10,000 single-compartment LIF voltage traces over 50 ms (dt = 0.1 ms, 501 time steps) with explicit Euler integration. Sampled six uniform biophysical priors (Cm, g_L, E_L, V_th, V_res, t_ref) under an enforced V_res < E_L < V_th ordering constraint, driven by an exponentially filtered colored synaptic current (tau = 10 ms, 10 Hz modulation) with random per-trial amplitude A in [0.3, 3.0] nA.',
                },
                {
                    label: '02 · BayesFlow 2 Pipeline',
                    title: 'CNN + GRU Encoder & CouplingFlow',
                    description:
                        'Wrapped the batched simulator in BayesFlow 2 BasicWorkflow with float32 casting and z-score standardization via Adapter. Coupled a TimeSeriesNetwork (1D CNN + GRU) to summarize each 501-step voltage trace with a conditional CouplingFlow normalizing flow. Trained offline on an 8,000/2,000 split for 100 epochs (Adam lr = 1e-3, batch 64, ReduceLROnPlateau, ModelCheckpoint), reaching best validation loss -8.1362 at epoch 95.',
                },
                {
                    label: '03 · Posterior Validation',
                    title: 'Recovery, SBC, Contraction & PPC',
                    description:
                        'Evaluated amortized posteriors on 400 unseen test traces (1,000 posterior draws per trace) plus BayesFlow default diagnostics on the 2,000-trace validation set (500 draws). Audited point recovery (Pearson r), rank-based Simulation-Based Calibration (SBC) ECDFs against 95% uniformity bands, posterior z-score vs. contraction plots, and posterior predictive voltage overlays re-simulated through the full stochastic LIF model.',
                },
            ],
            resultsTable: {
                title: 'Six-Parameter Biophysical Prior Ranges & Posterior Diagnostics',
                subtitle:
                    'Test recovery measured on 400 held-out traces (1,000 posterior draws each); posterior contraction and SBC measured on 2,000 validation traces (500 draws each).',
                columns: ['Parameter', 'Prior Support', 'Test Pearson r', 'Posterior Contraction', 'Identifiability & Calibration'],
                rows: [
                    {
                        cells: ['E_L (Resting potential)', '[-80, -65] mV', '1.000', '~1.00 (Sharp)', 'Near-exact recovery; slight positive SBC rank shift'],
                        highlight: true,
                    },
                    {
                        cells: ['V_res (Reset potential)', '[-80, -70] mV (< E_L)', '1.000', '~1.00 (Sharp)', 'Near-exact recovery; SBC shift linked to -80 mV clip boundary'],
                        highlight: true,
                    },
                    {
                        cells: ['t_ref (Refractory period)', '[1, 5] ms', '0.999', '~1.00 (Sharp)', 'Sharp recovery; rank ECDF well inside 95% band'],
                        highlight: true,
                    },
                    {
                        cells: ['V_th (Spike threshold)', '[-60, -50] mV', '0.998', '~1.00 (Sharp)', 'Sharp recovery; rank ECDF well inside 95% band'],
                        highlight: true,
                    },
                    {
                        cells: ['Cm (Membrane capacitance)', '[100, 200] pF', '0.491', 'Low (0.0 to 0.5)', 'Weakly identified; confounded through tau_m = Cm / g_L'],
                    },
                    {
                        cells: ['g_L (Leak conductance)', '[5, 15] nS', '0.046', 'Near 0 (Prior-like)', 'Unidentifiable under unobserved varying input amplitude A'],
                    },
                ],
                footnote:
                    'Ordering V_res < E_L < V_th is enforced by shifting violating draws by 2 to 5 mV and clipping back to prior bounds. Validation recovery (2,000 traces, 500 draws) closely mirrors test recovery (Cm = 0.432, g_L = 0.066, E_L = 1.000, V_th = 0.998, V_res = 1.000, t_ref = 0.999).',
            },
            figuresHeading: 'Posterior Diagnostics & Simulator Checks',
            figuresIntro:
                'Plots exported directly from main.ipynb and BayesFlow 2 diagnostic routines. Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/simulation-based-inference/param-recovery.webp',
                    badge: '400 Held-Out Traces',
                    title: 'Posterior Mean vs. Ground Truth (All 6 Parameters)',
                    caption:
                        'E_L (r = 1.000), V_res (r = 1.000), t_ref (r = 0.999), and V_th (r = 0.998) hug the diagonal, while Cm (0.491) and g_L (0.046) flatten toward the prior mean.',
                    surface: 'light',
                },
                {
                    src: 'projects/simulation-based-inference/ppc-voltage-trace.webp',
                    badge: 'Generative Check',
                    title: 'Posterior Predictive Check (10 Posterior Draws)',
                    caption:
                        'Simulated voltage traces from posterior draws (blue) recover the spike threshold, reset floor, and firing cadence of the observed trace (black) under freshly resampled colored input.',
                    surface: 'light',
                },
                {
                    src: 'projects/simulation-based-inference/z-score-contraction.webp',
                    badge: 'BayesFlow · Contraction',
                    title: 'Posterior Z-Score vs. Posterior Contraction',
                    caption:
                        'Contraction cleanly splits identifiable parameters (parameters_2..5 pinned at 1.0) from passive parameters (parameters_0..1 near 0), where centered z-scores show honest uncertainty rather than overconfidence.',
                    surface: 'light',
                },
                {
                    src: 'projects/simulation-based-inference/calibration-ecdf.webp',
                    badge: 'SBC · 95% Bands',
                    title: 'Simulation-Based Calibration Rank ECDFs',
                    caption:
                        'V_th (parameters_3) and t_ref (parameters_5) sit inside the 95% uniformity bands, while subtle rank shifts show up on E_L (parameters_2) and V_res (parameters_4) near the clipped -80 mV prior boundary.',
                    surface: 'light',
                },
                {
                    src: 'projects/simulation-based-inference/loss-trajectory.webp',
                    badge: '100 Epochs · Adam',
                    title: 'Training & Validation Loss Trajectory',
                    caption:
                        'Validation loss tracks training loss smoothly from 3.08 down to -8.14 (epoch 95) under ReduceLROnPlateau scheduling without overfitting.',
                    surface: 'light',
                },
                {
                    src: 'projects/simulation-based-inference/sensitivity-min-med-max.webp',
                    badge: 'Simulator Sensitivity',
                    title: 'LIF Voltage Response (Min / Median / Max Priors)',
                    caption:
                        'Overlaying extreme and median prior draws shows why threshold, reset, and refractory changes visibly reshape spike trains while passive membrane changes are much subtler.',
                    surface: 'light',
                },
            ],
            takeaways: [
                'Once trained (~12 minutes on an RTX 3070 Laptop GPU), the amortized CouplingFlow generates 1,000 posterior draws per voltage trace in seconds without deriving or evaluating an explicit likelihood.',
                'Weak recovery on Cm (r = 0.491) and g_L (r = 0.046) reflects a structural identifiability limit, not failed optimization: when per-trial input amplitude A varies unobserved, subthreshold voltage mainly depends on the ratios tau_m = Cm/g_L and R_m = 1/g_L.',
                'Reading SBC rank ECDFs alongside point recovery exposed subtle sub-millivolt calibration shifts on E_L and V_res that Pearson r = 1.000 hides, partly tied to clipping V_res at -80 mV when enforcing V_res < E_L.',
                'Practical next steps to unlock passive parameters: reparameterize inference to (tau_m, R_m) or record/fix input current amplitude A, extend recording windows from 50 ms to 200-500 ms using multi-level step and chirp stimuli, and replace boundary clipping with rejection sampling for V_res < E_L.',
            ],
        },
    },
    {
        id: 'monte-carlo-simulation',
        title: 'Bayesian Logistic Regression via Metropolis-Hastings',
        description: 'From-scratch multi-chain Random Walk Metropolis-Hastings sampler in R estimating full posteriors and credible intervals on the Pima Indians Diabetes dataset, validated against Frequentist MLE.',
        thumbnail: 'projects/monte-carlo-simulation/monte-carlo-simulation_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Project_Bayes_Logistic',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Project_Bayes_Logistic/refs/heads/main/README.md',
        techStack: ['R', 'Metropolis-Hastings', 'MCMC', 'coda', 'mvtnorm', 'caret', 'renv', 'LaTeX'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2026,
        language: 'R',
        caseStudy: {
            context: 'TU Dortmund · On the Theory & Practice of Monte Carlo Simulations',
            role: 'Team of 2 · Prof. Dr. Katja Ickstadt & Zeyu Ding',
            subtitle:
                'Building a multi-chain Random Walk Metropolis-Hastings sampler from scratch in R to infer full posterior distributions for binary diabetes prediction without relying on Stan or JAGS.',
            metrics: [
                {
                    value: '120,000 Draws',
                    label: '3 Chains × 40k Post-Burn-In',
                    detail: 'Custom RWMH sampler in R: 3 chains × 50,000 iterations (10,000 burn-in) initialized from overdispersed N(0, 2) states.',
                },
                {
                    value: 'R-hat <= 1.01',
                    label: 'Multi-Chain Convergence',
                    detail: 'Univariate and multivariate Gelman-Rubin PSRF strictly <= 1.01, with ESS from 2,054 (BMI) to 3,113 (Intercept).',
                },
                {
                    value: '77.78% Acc',
                    label: 'Held-Out Test Set (N = 153)',
                    detail: '95% CI [70.36%, 84.09%] vs. 65.36% baseline (p = 0.00059); 74.13% balanced accuracy, 62.26% diabetes recall, 86.00% specificity.',
                },
                {
                    value: 'MLE Aligned',
                    label: 'Validated Against glm()',
                    detail: 'All 9 posterior means and 95% credible intervals closely match Frequentist MLE on standardized clinical predictors.',
                },
            ],
            problem:
                'Logistic regression has no conjugate prior for a multivariate Gaussian prior on its coefficients, so the posterior normalizing constant cannot be solved in closed form. Rather than treating Stan or JAGS as a black box, this project implements a Random Walk Metropolis-Hastings (RWMH) sampler directly in R to estimate full posterior distributions and credible intervals across 8 clinical risk factors on the Pima Indians Diabetes dataset (768 patients).',
            ownership:
                'Completed as a two-person M.Sc. Data Science project (with Harsh Rana) for Prof. Dr. Katja Ickstadt and Zeyu Ding\'s course On the Theory and Practice of Monte Carlo Simulations (Winter Semester 2025/26, TU Dortmund). I built the reproducible 3-chain MCMC workflow in R with overdispersed starts, coda Gelman-Rubin (R-hat) and ESS diagnostics, renv dependency locking, portable here::here() paths, and 3x3 diagnostic figures, and authored the final LaTeX technical report.',
            approachHeading: 'Preprocessing, Custom MCMC Kernel & Diagnostics',
            approach: [
                {
                    label: '01 · Preprocessing & Baseline GLM',
                    title: 'Standardization & 80/20 Split',
                    description:
                        'Standardized all 8 clinical predictors (Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age) to mean 0 and SD 1 so an isotropic proposal navigates posterior geometry evenly. Split the 768 patients 80/20 (615 train, 153 test, seed 2026) and fit a binomial glm() baseline as the MLE reference.',
                },
                {
                    label: '02 · Custom RWMH Sampler',
                    title: 'Log-Posterior & 3 Overdispersed Chains',
                    description:
                        'Implemented the log-posterior manually combining a Bernoulli logistic likelihood (with epsilon clamping against log(0)) and a weakly informative N(0, 100 I) prior. Simulated 3 independent chains of 50,000 iterations (10,000 burn-in) starting from N(0, 2) draws with an isotropic multivariate normal random walk tuned to step variance 0.003 (~30-50% acceptance).',
                },
                {
                    label: '03 · Convergence & Validation',
                    title: 'R-hat, ESS, MLE Overlay & Test Scoring',
                    description:
                        'Audited convergence via coda::gelman.diag (all univariate and multivariate R-hat <= 1.01), coda::effectiveSize (ESS 2,054 to 3,113), and LOWESS trace overlays. Verified posterior accuracy by plotting Frequentist MLE lines directly over all 9 marginal posterior densities and evaluating posterior-mean predictions on the 153-patient held-out set.',
                },
            ],
            resultsTable: {
                title: 'Bayesian RWMH Posteriors vs. Frequentist MLE (Standardized Predictors)',
                subtitle:
                    'Pooled across 3 chains (120,000 post-burn-in draws) on 615 training patients with weakly informative prior Beta ~ N(0, 100 I).',
                columns: ['Parameter', 'Freq. MLE', 'MLE 95% CI', 'Bayes Mean', 'Bayes 95% CI', '95% CI Signal'],
                rows: [
                    {
                        cells: ['Glucose', '1.020', '[0.773, 1.283]', '1.042', '[0.785, 1.308]', 'Strong positive driver'],
                        highlight: true,
                    },
                    {
                        cells: ['BMI', '0.794', '[0.541, 1.062]', '0.813', '[0.556, 1.079]', 'Strong positive driver'],
                        highlight: true,
                    },
                    {
                        cells: ['Pregnancies', '0.379', '[0.148, 0.616]', '0.384', '[0.153, 0.617]', 'Positive effect (> 0)'],
                    },
                    {
                        cells: ['DiabetesPedigreeFunction', '0.325', '[0.107, 0.548]', '0.334', '[0.107, 0.561]', 'Positive effect (> 0)'],
                    },
                    {
                        cells: ['Age', '0.206', '[-0.030, 0.442]', '0.212', '[-0.026, 0.451]', 'Mild positive (crosses 0)'],
                    },
                    {
                        cells: ['BloodPressure', '-0.191', '[-0.409, 0.025]', '-0.198', '[-0.418, 0.019]', 'Uncertain (crosses 0)'],
                    },
                    {
                        cells: ['Insulin', '-0.090', '[-0.319, 0.141]', '-0.091', '[-0.324, 0.143]', 'No clear effect (374 raw zeros)'],
                    },
                    {
                        cells: ['SkinThickness', '-0.018', '[-0.258, 0.225]', '-0.017', '[-0.264, 0.232]', 'Centered near 0 (227 raw zeros)'],
                    },
                    {
                        cells: ['Intercept', '-0.853', '[-1.070, -0.646]', '-0.863', '[-1.074, -0.654]', 'Baseline log-odds'],
                    },
                ],
                footnote:
                    'Held-out test confusion matrix (N = 153, 0.5 cutoff): 86 TN, 14 FP, 20 FN, 33 TP for Diabetes (Outcome = 1). Overall accuracy = 77.78%, balanced accuracy = 74.13%, diabetes recall (sensitivity) = 62.26%, healthy specificity = 86.00%, diabetes precision = 70.21%.',
            },
            figuresHeading: 'MCMC Convergence & Posterior Validation Plots',
            figuresIntro:
                'Vector PDFs exported directly by Code/main_analysis.R across 120,000 pooled post-burn-in draws. Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/monte-carlo-simulation/posterior-density.webp',
                    badge: '120k Draws · MLE Check',
                    title: 'Marginal Posterior Densities vs. Frequentist MLE',
                    caption:
                        'All 9 posterior density curves peak right on top of the red dashed glm() MLE vertical lines, confirming the custom RWMH sampler targets the true posterior.',
                    surface: 'light',
                },
                {
                    src: 'projects/monte-carlo-simulation/trace-plots.webp',
                    badge: '3 Chains · R-hat <= 1.01',
                    title: 'Pooled Post-Burn-In MCMC Trace Plots',
                    caption:
                        'Stationary horizontal bands and flat blue LOWESS curves across 120,000 pooled draws confirm healthy mixing across all 9 parameters (ESS 2,054 to 3,113).',
                    surface: 'light',
                },
            ],
            takeaways: [
                'The from-scratch RWMH sampler reproduced all 9 Frequentist MLE estimates within 0.02 standardized log-odds units while giving direct posterior probability intervals for every clinical risk factor.',
                'Glucose (mean 1.042, 95% CI [0.785, 1.308]) and BMI (0.813, [0.556, 1.079]) dominate diabetes risk, followed by Pregnancies and DiabetesPedigreeFunction; SkinThickness and Insulin remain centered near zero.',
                'At the default 0.5 threshold on the 153-patient test split, the classifier reaches 77.78% accuracy (86.00% specificity on healthy patients, 62.26% recall on diabetic patients, 70.21% diabetes precision). Clinical screening would tune the probability cutoff below 0.5 and integrate over full posterior draws.',
                'Two direct next steps for stronger clinical modeling: impute zero-encoded missing measurements in the Pima dataset (374 raw zeros in Insulin, 227 in SkinThickness) as latent variables, and replace isotropic random-walk proposals (ESS ~2% of raw draws) with adaptive covariance MCMC or HMC/NUTS.',
            ],
        },
    },
    {
        id: 'georeferenced-microdata-anonymization',
        title: 'Anonymization of Georeferenced Microdata',
        description: 'Spatial k-anonymity benchmark of Verified Neighbor geomasking (Richter 2018) vs. Random Perturbation and Donut Geomasking on 125,612 real OpenStreetMap Dortmund buildings (EPSG:25832), cross-validated on Erie County, NY.',
        thumbnail: 'projects/georeferenced-microdata-anonymization/georeferenced-microdata-anonymization_thumb.webp',
        githubLink: 'https://github.com/r-a-j/georeferenced-microdata-anonymization',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/georeferenced-microdata-anonymization/main/README.md',
        techStack: ['Python', 'OpenStreetMap', 'EPSG:25832 (UTM)', 'SciPy cKDTree', 'Spatial Privacy', 'Ripley K/L', 'Kulldorff Scan', 'NumPy', 'Matplotlib'],
        rating: 5,
        category: 'Geospatial & Privacy',
        year: 2024,
        language: 'Python',
        caseStudy: {
            context: 'TU Dortmund · M.Sc. Seminar (Statistical Disclosure Control)',
            role: 'Individual Seminar Paper, Talk & Real-OSM Python Benchmark · Prof. Dr. Rainer Lenz',
            subtitle:
                'Evaluating how to anonymize individual-level location records against reverse-geocoding attacks on real OpenStreetMap building footprints (Dortmund, Germany + Erie County, NY) without destroying local spatial patterns or disease hotspot detection.',
            metrics: [
                {
                    value: '100% k-Safe',
                    label: 'Worst-Case Privacy Floor',
                    detail: 'Verified Neighbor guaranteed exact target k and 100% verified residential OSM placement in Dortmund vs. 40.1-46.6% valid residential placement and min k = 10 for fixed-radius RP.',
                },
                {
                    value: '12.4 m RMSE',
                    label: 'Sub-1 km Pattern Fidelity',
                    detail: 'Besag L(r)-r RMSE below 1 km on Dortmund dropped from 274.3 m (RP 905 m) and 174.9 m (Donut) down to 12.4 m (VN Env k=50) and 21.7 m (VN Env k=100).',
                },
                {
                    value: '0.808 Jaccard',
                    label: 'Hotspot Scan Recovery',
                    detail: 'Kulldorff Poisson scan recovered 2.76/3 true Dortmund tiles (0.88 outside) under VN Env k=100 vs. 0.339 Jaccard (4.92 outside) for RP 905 m.',
                },
                {
                    value: '179k Buildings',
                    label: 'Real OSM Dual-City Audit',
                    detail: '125,612 real Dortmund OSM buildings (EPSG:25832) primary benchmark + 53,394 Erie County, NY buildings (EPSG:26918) cross-validation (80,000 runs per city).',
                },
            ],
            problem:
                'Publishing individual-level geospatial records (health registries, mobility logs, or environmental exposure tables) creates a direct reverse-geocoding threat. Coarse postcode aggregation hides addresses but destroys local distance analysis and hotspot detection. Meanwhile, fixed-radius random perturbation cannot adapt to real urban morphology: on compact Dortmund, a 905 m radius over-masks central neighborhoods up to k = 2,570 and scatters ~60% of masked points onto garages, parks, Phoenix-See, or commercial land, while tightening the radius to 500 m drops sparse outskirt privacy down to k = 10.',
            ownership:
                'Completed individually for Prof. Dr. Rainer Lenz\'s M.Sc. Seminar on Anonymization of Georeferenced Microdata at TU Dortmund (Winter Term 2023/24). Alongside the 12-page technical report and 40-slide presentation evaluating Wayne Richter\'s (2018) Verified Neighbor geomasking framework, I built an open-source, unit-tested Python benchmark that fetches real OpenStreetMap building footprints via Overpass, projects WGS84 to metric UTM (EPSG:25832 & EPSG:26918) in pure NumPy, and compares cKDTree Verified Neighbor against Random Perturbation and Donut Geomasking using Hotelling T², Rayleigh tests, Besag L(r)-r, and Kulldorff Poisson spatial scans.',
            approachHeading: 'Real-OSM Pipeline, Geomasking Engine & Spatial Audit',
            approach: [
                {
                    label: '01 · Real OSM & UTM Projection',
                    title: 'Dortmund (125k) + Erie County (53k)',
                    description:
                        'Fetched public OpenStreetMap building centroids via Overpass and projected them to exact metric UTM (EPSG:25832 for Dortmund, EPSG:26918 for Erie County) using 4th-order transverse Mercator series in pure NumPy. Handled real German ALKIS vs. US NYS GIS building-tag differences to isolate 58,462 verified residential buildings in Dortmund and 50,252 in Erie County, sampling 160 residential centroids per city (100 uniform-null background + 35 primary + 25 secondary cluster; zero personal data).',
                },
                {
                    label: '02 · Spatial Masking Engine',
                    title: 'cKDTree Verified Neighbor vs. Baselines',
                    description:
                        'Benchmarked Verified Neighbor (SciPy cKDTree over verified residences with a strict 50 m exclusion ring and optional environmental service-zone matching, k = 50 to 350) against uniform-area Random Perturbation (r = 500 m European scale and r = 905 m Richter baseline) and density-adaptive Donut Geomasking (Hampton et al., k_min = 100).',
                },
                {
                    label: '03 · Privacy & Utility Audit',
                    title: '50 Replicates, Ripley L(r) & Kulldorff Scan',
                    description:
                        'Audited 10 masking configurations x 50 Monte Carlo runs per region (80,000 masked realizations per city): worst-case realized k, <= 25 m residential placement validity, Hotelling T² mean-center shift, Rayleigh circular directional bias, Besag L(r)-r pattern RMSE, and Kulldorff discrete Poisson cluster Jaccard recovery.',
                },
            ],
            resultsTable: {
                title: 'Dortmund, Germany: 50-Replicate Spatial Privacy vs. Utility Benchmark (125,612 Real OSM Buildings)',
                subtitle:
                    'Projected to EPSG:25832 (UTM 32N; 58,462 residential, 67,150 non-residential, 12 x 12 metric grid, 160 subjects, seed = 42).',
                columns: ['Geomasking Method', 'Achieve k (%)', 'Min / Max k', 'Valid Res. (%)', 'Same Env (%)', 'Mean Disp (m)', 'Sub-1 km L(r) RMSE', 'Cluster Jaccard'],
                rows: [
                    {
                        cells: ['Random Perturbation (r = 500 m)', '98.8%', '10 / 1,101', '46.6%', '96.3%', '336.2 m', '130.1 m', '0.385 (2.52 / 4.44)'],
                    },
                    {
                        cells: ['Random Perturbation (r = 905 m)', '99.4%', '57 / 2,570', '40.1%', '88.1%', '600.7 m', '274.3 m', '0.339 (2.36 / 4.92)'],
                    },
                    {
                        cells: ['Donut Geomasking (k_min = 100, Env)', '99.4%', '95 / 4,227', '45.3%', '100.0%', '558.3 m', '174.9 m', '0.355 (2.28 / 4.52)'],
                    },
                    {
                        cells: ['Verified Neighbor (All, k = 50)', '100.0%', '50 / 50', '100.0%', '98.4%', '105.9 m', '13.8 m', '0.645 (2.54 / 1.62)'],
                        highlight: true,
                    },
                    {
                        cells: ['Verified Neighbor (All, k = 100)', '100.0%', '100 / 100', '100.0%', '98.3%', '143.7 m', '27.1 m', '0.627 (2.48 / 1.76)'],
                        highlight: true,
                    },
                    {
                        cells: ['Verified Neighbor (Env, k = 50)', '100.0%', '50 / 50', '100.0%', '100.0%', '109.7 m', '12.4 m', '0.768 (2.70 / 1.06)'],
                        highlight: true,
                    },
                    {
                        cells: ['Verified Neighbor (Env, k = 100)', '100.0%', '100 / 100', '100.0%', '100.0%', '154.5 m', '21.7 m', '0.808 (2.76 / 0.88)'],
                        highlight: true,
                    },
                    {
                        cells: ['Verified Neighbor (Env, k = 200)', '100.0%', '200 / 200', '100.0%', '100.0%', '224.0 m', '32.4 m', '0.704 (2.68 / 1.64)'],
                    },
                ],
                footnote:
                    'Cluster column shows mean Jaccard (true in / false outside of 3 ground-truth Dortmund tiles). Cross-region validation on Erie County, NY (EPSG:26918, 53,394 real OSM buildings, mirroring Richter 2018) confirmed the same pattern: RP 905 m left 11/160 subjects below k = 100 (min k = 40, 36.5% valid res., 409.3 m sub-1 km RMSE) and Donut smeared the 9-tile cluster across 10.22 outside tiles (Jaccard 0.246), whereas Verified Neighbor (All, k = 50) achieved 100% exact k, 149.3 m mean displacement, 33.9 m sub-1 km RMSE, and 0.916 cluster Jaccard (0.06 outside). Full Erie County CSV and plots are stored in the repository.',
            },
            figuresHeading: 'Dortmund OpenStreetMap Diagnostics & Cluster Scans',
            figuresIntro:
                'Generated directly by src/run_benchmark.py on 125,612 real Dortmund OSM buildings (EPSG:25832; map data (c) OpenStreetMap contributors, ODbL 1.0). Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/georeferenced-microdata-anonymization/verified-neighbor-pipeline.webp',
                    badge: 'Dortmund OSM · Walkthrough',
                    title: 'Verified Neighbor Winnowing & Sparse Outskirt Comparison',
                    caption:
                        'Left: Filtering real Dortmund OSM buildings along the east-west corridor outside a 50 m buffer isolates an exact k = 50 same-zone pool within 311 m. Right: On Dortmund\'s sparse southern outskirts, fixed 905 m RP captures only 54 residences while adaptive VN expands smoothly to 1,044 m to guarantee k = 100.',
                    surface: 'light',
                },
                {
                    src: 'projects/georeferenced-microdata-anonymization/spatial-methods-comparison.webp',
                    badge: '125,612 OSM Buildings',
                    title: 'City-Scale Spatial Footprints Across Dortmund (4 Methods)',
                    caption:
                        'Random Perturbation (40.1% valid residential) and Donut Geomasking (45.3%) scatter surrogates across Phoenix-See, parks, garages, and industrial belts, while Verified Neighbor stays 100% on real residential OSM buildings and honors the service boundary under Env matching.',
                    surface: 'light',
                },
                {
                    src: 'projects/georeferenced-microdata-anonymization/privacy-vs-displacement.webp',
                    badge: 'k-Anonymity & CDF',
                    title: 'Realized Spatial k-Anonymity & Net Displacement CDF',
                    caption:
                        'Rank-ordered pool sizes expose the fixed-radius dilemma: RP 905 m over-masks inner Dortmund up to k = 2,570 while still dropping to k = 57 on outskirts, and RP 500 m falls to k = 10. Verified Neighbor holds exact target k with far smaller net displacement.',
                    surface: 'light',
                },
                {
                    src: 'projects/georeferenced-microdata-anonymization/ripley-and-cluster-utility.webp',
                    badge: 'L(r)-r & Kulldorff Scan',
                    title: 'Besag L(r)-r Pattern Fidelity & Kulldorff Poisson Scan',
                    caption:
                        'Verified Neighbor tracks unmasked Dortmund L(r)-r within 12.4-21.7 m below 1 km and locks onto all 3 red ground-truth Hoerde/Phoenix-See South tiles (Jaccard 0.808), while RP 905 m and Donut blur the hotspot outward.',
                    surface: 'light',
                },
            ],
            takeaways: [
                'Running on two real OSM cities exposes why hand-tuned fixed radii fail in production: Richter\'s 905 m Erie County radius massively over-masks compact Dortmund (up to k = 2,570) while still dipping below k = 100 on outskirts, and tightening to 500 m drops worst-case privacy to k = 10 in Dortmund and leaves 21.2% of Erie County subjects below k = 100.',
                'Verified Neighbor eliminates impossible coordinates (zero points in lakes, parks, garages, or industrial zones), cuts mean displacement by 4x to 5.6x in Dortmund (105.9-154.5 m vs. 600.7 m RP 905 m), reduces sub-kilometer L(r)-r RMSE by up to 20x, and lifts Kulldorff cluster Jaccard from 0.339 to 0.808 (and 0.916 on Erie County).',
                'Real street networks naturally introduce directional pull at parks, rail corridors, and city edges: Hotelling T² (61.9%-71.9%) and Rayleigh (65.6%-72.5%) rates on Dortmund OSM match Richter\'s original Erie County empirical findings (43%-74% and 43%-69%), while strict environmental zone matching pushes rural search jumps up to 4.4 km.',
                'Practical deployment requires maintaining current residential address registries (e.g., German ALKIS cadastre or verified OSM building footprints), adapting OSM tag parsers across regions, and sizing k jointly with any non-spatial quasi-identifiers released alongside coordinates.',
            ],
        },
    },
    {
        id: 'kosh',
        title: 'Kosh (कोश)',
        description: 'Early-stage prototype for a private, offline-first Android knowledge assistant running local LLMs on-device via Google LiteRT.',
        thumbnail: 'projects/kosh/kosh_thumb.png',
        statusBadge: 'In Development',
        githubLink: 'https://github.com/r-a-j/kosh',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/kosh/refs/heads/main/README.md',
        techStack: ['Android', 'Kotlin', 'Jetpack Compose', 'LiteRT', 'SQLite FTS5', 'AES-256-GCM'],
        rating: 4,
        category: 'Android',
        year: 2026,
        language: 'Kotlin',
    },
    {
        id: 'eye-tracking-fixations',
        title: 'Eye-Tracking Fixation Dynamics & Detector Robustness',
        description: 'Log-Normal mixed-effects modeling, kiosk UI anomaly auditing (DoB=2000), right-censoring analysis, and OFAT fixation-detector sensitivity across 183,627 NEMO eye-tracking fixations (7,250 visitors, ages 3-93).',
        thumbnail: 'projects/eye-tracking/eye-tracking_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Eye-Tracking-Fixations',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Eye-Tracking-Fixations/main/README.md',
        techStack: ['Python', 'Mixed-Effects (REML)', 'Cubic B-Splines', 'Hessels / I-VT', 'Signal Processing', 'SciPy', 'pandas', 'Matplotlib'],
        rating: 5,
        category: 'Statistics',
        year: 2024,
        language: 'Python',
        caseStudy: {
            context: 'TU Dortmund · Case Studies I (Applied Statistical Modeling)',
            role: 'Team of 4 · Prof. Paul Bürkner & Dr. Šimon Kucharský',
            subtitle:
                'Testing lifespan age hypotheses and within-trial fixation dynamics across 7,250 NEMO Science Museum visitors while separating true cognitive patterns from kiosk UI defaults, fixation-order survivorship bias, 10-second right-censoring, and detector thresholds.',
            metrics: [
                {
                    value: '+14.5% Rise',
                    label: 'Ambient-to-Focal Trend',
                    detail: 'Over uncensored trial time (0.5 -> 7.0 s), median duration climbs from 199.2 ms to 228.2 ms before plateauing (LRT p = 9.2e-248).',
                },
                {
                    value: 'No Age U-Curve',
                    label: 'Lifespan Shift ~12 ms',
                    detail: 'Continuous Age splines (ages 3-93) show zero late-life rebound (-0.30%/decade, p = 0.123), dwarfed by viewer baselines (ICC 4.0%).',
                },
                {
                    value: '21.1% Spike',
                    label: 'DoB = 2000 Audit',
                    detail: 'Flagged 1,532 visitors defaulting to birth year 2000 (5x adjacent cohorts) and verified all models with and without them.',
                },
                {
                    value: '12-Config OFAT',
                    label: 'Real 60 Hz Trace Audit',
                    detail: 'Re-parsed 1,000 real 60 Hz gaze traces varying one parameter at a time (Adaptive Hessels + independent I-VT 20-40 deg/s).',
                },
            ],
            problem:
                'Most eye-tracking studies rely on small, homogeneous university cohorts, leaving lifespan hypotheses (that fixation durations shorten during childhood and lengthen again in older adulthood) difficult to test cleanly. On large museum free-viewing datasets (Strauch et al., 2023; 10-second viewing at 60 Hz), naive analyses run into four traps at once: unflagged kiosk UI birth-year defaults (DoB = 2000), heavily right-skewed durations that violate Gaussian residual assumptions, survivorship bias when indexing time by fixation order, and hard right-censoring at the 10-second trial cutoff.',
            ownership:
                'Completed as a 4-person M.Sc. Case Study at TU Dortmund (Prof. Paul Bürkner and Dr. Šimon Kucharský, Winter Term 2024/25). I handled raw NEMO preprocessing, Hessels and I-VT fixation extraction across the 60 Hz recordings, Python EDA, and the individual technical report, implementing a unit-tested Python pipeline with an exact Woodbury REML/ML random-intercept LMM solver (verified to match lme4 to 5 digits), continuous cubic B-splines for age and onset time, explicit censoring and DoB = 2000 sensitivity audits, and a 12-configuration OFAT detector benchmark on 1,000 real gaze traces.',
            approachHeading: 'Data Audit, Log-Normal Spline LMM & OFAT Robustness',
            approach: [
                {
                    label: '01 · Audit & Log-Normal LMM',
                    title: 'DoB = 2000 Spike & Residual Diagnostics',
                    description:
                        'Audited 7,250 valid free-viewing visitors (183,627 fixations) and isolated 1,532 records stuck at kiosk default DoB = 2000 (Age 23). Modeled log(duration) via an exact REML/ML Log-Normal LMM instead of skewed raw-scale Gaussian models (cutting residual skewness from 4.82 to 0.42 and max outlier from 31.8 SD to 5.9 SD), and ran participant-level Kruskal-Wallis tests on independent viewer means.',
                },
                {
                    label: '02 · Continuous Splines & Censoring',
                    title: 'Elapsed Onset vs. Fixation Order',
                    description:
                        'Replaced fixation-order indexing (which drops artificially past Order 22 because only fast-saccading viewers reach 25-36 fixations in 10 s) with 5-df cubic B-splines over continuous trial onset time and continuous age, isolating the uncensored 0-8 s interior (>99% natural completions) from the 8-10 s right-censoring zone.',
                },
                {
                    label: '03 · OFAT & I-VT Detector Audit',
                    title: '1,000 Real 60 Hz Traces Re-Parsed',
                    description:
                        'Implemented clean MIT-licensed adaptive slow/fast velocity (Hessels et al., 2020) and fixed-threshold I-VT (Salvucci & Goldberg, 2000) detectors. Re-extracted fixations on 1,000 age-stratified 60 Hz traces across 12 one-factor-at-a-time settings (lambda, min_fix, min_amp, and I-VT 20-40 deg/s) and refit the LMM on every sweep.',
                },
            ],
            resultsTable: {
                title: 'Nested Log-Normal Mixed-Effects Model Sensitivity Across 5 Cohorts',
                subtitle:
                    'Exact ML Likelihood Ratio Tests and REML variance components for log(duration) ~ ns(onset, 5) + ns(age, 5) + (1 | ID).',
                columns: ['Sensitivity Cohort', 'Fixations (n)', 'Visitors (G)', 'ICC / R²c', 'Onset Rise (0.5->7 s)', 'Onset LRT p', 'Age Slope (/10 yr)', 'Age Spline p'],
                rows: [
                    {
                        cells: ['All Valid Free-Viewing (onset <= 8 s)', '156,598', '7,250', '4.0% / 4.7%', '+14.5% (199->228 ms)', '9.2e-248', '-0.30%', '0.123'],
                        highlight: true,
                    },
                    {
                        cells: ['Excl. DoB = 2000 Default (onset <= 8 s)', '123,214', '5,718', '4.0% / 4.7%', '+14.8% (200->229 ms)', '7.0e-198', '-0.32%', '0.085'],
                        highlight: true,
                    },
                    {
                        cells: ['Strict Valid = True & DoB != 2000', '98,234', '4,546', '4.0% / 4.7%', '+15.5% (200->231 ms)', '4.3e-164', '-0.51%', '0.024'],
                    },
                    {
                        cells: ['Excl. Initial Cross Fixation (Order > 0)', '149,348', '7,247', '4.0% / 4.5%', '+11.4% (206->229 ms)', '2.7e-162', '-0.35%', '0.138'],
                    },
                    {
                        cells: ['Full 0-10 s (Incl. Censored Tail)', '183,627', '7,250', '3.7% / 4.6%', '+17.7% (cutoff bias)', '< 1e-300', '-0.20%', '0.179'],
                    },
                ],
                footnote:
                    'OFAT detector audit on 1,000 stratified 60 Hz traces (results/ofat_robustness.csv): across all 12 Adaptive Hessels (lambda 2.0-3.0, min_fix 40-100 ms, min_amp 0.5-1.5 deg) and I-VT (20-40 deg/s) settings, the uncensored 0.5->7.0 s rise held consistently between +9.2% and +14.1% (all p <= 2.0e-28). Fixed-threshold I-VT induced a small -1.6% to -1.9%/decade age artifact from unadapted tracking noise that vanished under noise-adaptive Hessels thresholds (-0.40% to -0.53%/decade, p > 0.21).',
            },
            figuresHeading: 'Experimental Stimulus, Data Audit & OFAT Diagnostics',
            figuresIntro:
                'Original NEMO stimulus (Strauch et al., 2023) and diagnostic plots generated directly by src/run_analysis.py. Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/eye-tracking/stimulus-and-gaze-overlay.webp',
                    badge: 'Experiment Stimulus',
                    title: 'Original 10-Second Free-Viewing Stimulus & Empirical Gaze Overlay',
                    caption:
                        'Left: The feature-rich 1920x1080 composite scene shown to 7,250 NEMO Science Museum visitors for 10 seconds without instructions. Right: Gaussian-smoothed density of 178,186 in-screen fixations aligned pixel-exact to focal humans, faces, and animals.',
                    surface: 'light',
                },
                {
                    src: 'projects/eye-tracking/data-audit-and-diagnostics.webp',
                    badge: 'Audit & Q-Q Check',
                    title: 'DoB = 2000 Default Spike & Raw vs. Log-Normal LMM Diagnostics',
                    caption:
                        'Top: 1,532 visitors default to DoB = 2000 (21.1% spike at Age 23), and raw durations are heavily right-skewed (median 200 ms vs. mean 257 ms). Bottom: Log transformation drops residual skewness from 4.82 to 0.42 and max outlier from 31.8 SD to 5.9 SD.',
                    surface: 'light',
                },
                {
                    src: 'projects/eye-tracking/age-lifespan-analysis.webp',
                    badge: 'RQ1 · Lifespan Age',
                    title: 'Continuous Age Splines vs. Between-Viewer Baseline Variability',
                    caption:
                        'Left: Continuous cubic B-splines across all three cohorts reject a U-shaped late-life rebound (total shift ~12 ms across ages 6-75). Right: Viewer-specific random intercepts (BLUP 10th-90th spread = 44 ms, raw spread > 100 ms) completely dwarf lifespan age.',
                    surface: 'light',
                },
                {
                    src: 'projects/eye-tracking/temporal-dynamics-and-censoring.webp',
                    badge: 'RQ2 · Trial Time',
                    title: 'Ambient-to-Focal Progression, 10 s Censoring & Order Survivorship Bias',
                    caption:
                        'Left: Over uncensored onset time (0-8 s), durations rise +14.5% and plateau; after 8 s, the 10 s trial cutoff truncates ongoing fixations (96.9% final in 9.5-10 s). Right: Fixation-order curves drop past Order 22 solely because active viewer count collapses to fast saccaders.',
                    surface: 'light',
                },
                {
                    src: 'projects/eye-tracking/ofat-robustness-and-spatial-gaze.webp',
                    badge: '12-Config OFAT · Gaze Map',
                    title: 'OFAT Detector Robustness (1,000 Real 60 Hz Traces) & Stimulus Overlay',
                    caption:
                        'Left: Varying one parameter at a time across Adaptive Hessels and independent I-VT (20-40 deg/s) shifts median duration by 17-33 ms while leaving the +9.2% to +14.1% ambient-to-focal rise invariant. Right: Pixel-aligned fixation overlay on the 1920x1080 NEMO stimulus.',
                    surface: 'light',
                },
            ],
            takeaways: [
                'Separating continuous trial onset time (0-8 s uncensored interior) from fixation-order survivorship bias and 10-second trial-end right-censoring turned an apparent late-trial drop into the textbook ambient-to-focal progression (+14.5% median rise from 0.5 s to 7.0 s, then plateau).',
                'Continuous non-linear age splines across 7,250 visitors (ages 3-93) show no late-life U-shaped increase in fixation duration; any childhood shortening is ~10-12 ms and explains < 0.05% of variance compared to individual viewer baselines (ICC 4.0%) and within-trial scene salience (~95%).',
                'Auditing raw demographics caught 1,532 visitors (21.1%) stuck at kiosk default DoB = 2000, and switching from raw-duration LMM to Log-Normal LMM fixed severe skew (4.82 -> 0.42) and kurtosis (65.1 -> 0.42) violations.',
                'True one-factor-at-a-time (OFAT) re-extraction on 1,000 real 60 Hz gaze traces showed why noise-adaptive velocity detectors (Hessels et al., 2020) outperform fixed-threshold I-VT in heterogeneous populations: I-VT fragmented noisier older-viewer recordings into a spurious -1.9%/decade age slope that disappeared under adaptive thresholding.',
            ],
        },
    },
    {
        id: 'world-value-survey',
        title: 'World Values Survey: Institutional Trust Analysis',
        description: 'Cross-national (66 countries, 97,220 respondents) and multi-decade (1995-2022) study of institutional trust using exact Cumulative Link Ordered Logit, macro governance links, and 4-class Latent Class Analysis.',
        thumbnail: 'projects/world-value-survey/world-value-survey_thumb.webp',
        githubLink: 'https://github.com/r-a-j/World-Value-Survey',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/World-Value-Survey/main/README.md',
        techStack: ['Python', 'Ordered Logit', 'Latent Class Analysis', 'EM Algorithm', 'SciPy', 'NumPy', 'pandas', 'Matplotlib'],
        rating: 5,
        category: 'Statistics',
        year: 2025,
        language: 'Python',
        caseStudy: {
            context: 'TU Dortmund · Case Studies II (Applied Statistical Modeling)',
            role: 'Team of 4 · Prof. Paul Bürkner & Dr. Šimon Kucharský',
            subtitle:
                'Modeling public trust in government and state institutions across 66 Wave 7 nations (97,220 respondents) and 27 years of WVS time series (1995-2022) with exact Cumulative Link Ordered Logit, external governance indices, and model-based Latent Class Analysis.',
            metrics: [
                {
                    value: 'r = -0.53',
                    label: 'Critical Citizens Paradox',
                    detail: 'Across 61 Wave 7 nations, government trust falls with V-Dem Press Freedom (p = 1.2e-5), while Police trust rises with CPI (r = +0.50, p = 4.8e-5).',
                },
                {
                    value: 'OR = 0.35',
                    label: '2017 US Press Polarization',
                    detail: 'Strictly filtered USA Wave 7 Ordered Logit (n = 2,396, R² = 0.248, VIF 1.03-1.99): Press trust strongly lowers 2017 US executive trust (p = 3.9e-59).',
                },
                {
                    value: '1995-2022',
                    label: 'Divergent Trust Trends',
                    detail: 'USA Armed Forces stay 81-85% while Parties fall 19.9% -> 10.4% (LRT chi2 = 567.7); Germany rises 20% -> 43% while UK drops 32% -> 21%.',
                },
                {
                    value: '4-Class LCA',
                    label: 'Entropy = 0.844 (n = 12.6k)',
                    detail: 'Multi-start EM categorical mixture replaces K-means, separating Rule-of-Law Pragmatists (44.7%), Moderate (23.6%), Strong (12.9%), and Distrustors (18.7%).',
                },
            ],
            problem:
                'Cross-national survey data on institutional trust is inherently discrete and ordered (4-level confidence scales), yet applied analyses routinely distort it by collapsing ordinal categories into binary indicators, treating country IDs as numeric slopes, running Euclidean K-means on discrete items, or misreading reversed WVS coding (where raw 1 means "A great deal" and 4 means "None at all"). Separately, looking only at within-country demographics misses why citizens in open democracies report lower executive trust than citizens in less free regimes.',
            ownership:
                'Completed as a 4-person M.Sc. Case Study at TU Dortmund (Prof. Paul Bürkner, Dr. Šimon Kucharský, and Svenja Jedhoff, Winter Term 2024/25) covering USA determinants, G8 cross-national comparisons, 1995-2022 longitudinal trends, and citizen segmentation. I built the end-to-end unit-tested Python statistical pipeline in pure NumPy/SciPy: implementing exact Cumulative Link Ordered Logit (analytic gradient, exact Fisher Hessian, 3-cutpoint Proportional Odds checks, and valid VIF >= 1.0), integrating 66-country external governance indicators (World Bank, Transparency International, Freedom House, V-Dem), modeling covariate-adjusted longitudinal probability trajectories, and fitting multi-start EM Latent Class Analysis.',
            approachHeading: 'Ordinal Modeling, Macro Linkages & Latent Structure',
            approach: [
                {
                    label: '01 · Exact Ordered Logit & Audit',
                    title: 'Ascending Scale, Valid VIF & PO Check',
                    description:
                        'Reverse-coded all WVS confidence items consistently to 1 = None at all .. 4 = A great deal so positive log-odds always indicate higher trust. Strictly isolated the USA Wave 7 cohort (n = 2,396 complete / 2,596 total), anchored Education at Middle to avoid sparse-reference inflation (all VIFs in [1.03, 1.99]), and verified Proportional Odds across all three cumulative cutpoints (Y >= 2, Y >= 3, Y = 4).',
                },
                {
                    label: '02 · Joint G8 Model & Global Macro',
                    title: 'Categorical Dummies + 66-Nation Indices',
                    description:
                        'Accounted for exact Wave 7 G8 participation (6 countries, n = 13,914; France and Italy last participated in Wave 5) and fit a single pooled Ordered Logit with categorical Country fixed effects (Germany reference) and formal Country x Predictor LRTs. Linked 61-62 Wave 7 nations to cleaned World Bank GDP PPP, Transparency International CPI, Freedom House, and V-Dem Press Freedom indices.',
                },
                {
                    label: '03 · Multi-Decade Trends & EM LCA',
                    title: 'Delta-Method P(Y >= 3) & 4 Citizen Archetypes',
                    description:
                        'Modeled 1995-2022 WVS Time Series waves with explicit wave-year effects and delta-method 95% CIs for predicted P(High Trust >= 3) at fixed Age 45 / Income 5. Used multi-start EM Latent Class Analysis (K = 2..6) rather than Euclidean K-means across 8 discrete 4-level institutional trust items on 12,567 G8 respondents.',
                },
            ],
            resultsTable: {
                title: 'Wave 7 G8 Institutional Trust Profile, Macro Governance & LCA Archetype Shares',
                subtitle:
                    'Official WVS Wave 7 (v6.0): 6 G8 participating countries (France & Italy absent in Wave 7), macro indicators (n = 61-62 nations), and K = 4 LCA posterior shares (n = 12,567, Entropy = 0.844).',
                columns: ['G8 Nation (Year)', 'Gov. High Trust', 'Police / Courts High', 'V-Dem Press / CPI', 'C1 Distrustors', 'C2 Pragmatists', 'C3 Moderate / C4 Strong'],
                rows: [
                    {
                        cells: ['Germany (2018, n=1,484)', '45.5% (12.1% None)', '86.8% / 74.9%', '0.96 / 80', '11.3%', '41.9%', '32.0% / 14.8%'],
                        highlight: true,
                    },
                    {
                        cells: ['Canada (2020, n=4,018)', '48.3% (13.7% None)', '69.4% / 61.1%', '0.95 / 77', '14.2%', '40.3%', '32.3% / 13.2%'],
                    },
                    {
                        cells: ['Japan (2019, n=1,243)', '43.4% (10.9% None)', '81.7% / 85.6%', '0.85 / 73', '11.8%', '48.1%', '28.4% / 11.7%'],
                    },
                    {
                        cells: ['Russia (2017, n=1,745)', '54.8% (16.7% None)', '52.1% / 47.9%', '0.27 / 28', '26.3%', '32.0%', '24.7% / 17.0%'],
                        highlight: true,
                    },
                    {
                        cells: ['United States (2017, n=2,579)', '31.0% (30.7% None)', '69.0% / 57.6%', '0.89 / 69', '23.4%', '54.9%', '10.7% / 11.0%'],
                        highlight: true,
                    },
                    {
                        cells: ['United Kingdom (2022, n=2,574)', '22.8% (30.1% None)', '68.1% / 67.2%', '0.96 / 77', '24.2%', '49.1%', '15.0% / 11.6%'],
                    },
                ],
                footnote:
                    'Pooled 6-G8 Ordered Logit (n = 11,371 complete): Country FE LRT chi2(5) = 647.2 (p = 1.3e-137) and Country x Predictor Interaction LRT chi2(25) = 595.0 (p = 1.3e-109). Relative to Germany (OR = 1.0), fully adjusted government-trust odds are 1.94x Russia, 1.59x Canada, 1.00x Japan, 0.75x USA, and 0.39x UK. Global 61-country correlations: Government Trust vs. V-Dem Press Freedom r = -0.53 (p = 1.15e-5), Freedom House r = -0.40 (p = 0.0013), GDP PPP r = +0.03 (p = 0.83); Police Trust vs. CPI r = +0.50 (p = 4.79e-5), GDP PPP r = +0.40 (p = 0.0013).',
            },
            figuresHeading: 'Cross-National, Ordinal Regression, Longitudinal & LCA Diagnostics',
            figuresIntro:
                'Publication-grade figures generated directly by src/run_wvs_analysis.py from official WVS Wave 7 (v6.0) and Time Series (v5.0) releases. Click any figure to inspect full resolution.',
            figures: [
                {
                    src: 'projects/world-value-survey/g8-trust-and-macro-paradox.webp',
                    badge: '66 Nations · Macro Link',
                    title: 'G8 4-Level Government Trust & Global Critical Citizens Paradox',
                    caption:
                        'Left: Properly ordered 4-level Government Trust across the 6 G8 Wave 7 nations (30%+ "None at all" in USA and UK vs. 11-12% in Japan and Germany). Right: Across 61 nations, Government Trust falls with V-Dem Press Freedom (r = -0.53) while rule-of-law Police Trust rises with anti-corruption CPI (r = +0.50).',
                    surface: 'light',
                },
                {
                    src: 'projects/world-value-survey/usa-and-g8-ordered-logit.webp',
                    badge: 'Ordered Logit · PO Audit',
                    title: 'USA Wave 7 Odds Ratios (+ Cutpoint Check) & Joint G8 Country Effects',
                    caption:
                        'Left: Strictly USA Ordered Logit (n = 2,396, R² = 0.248) with 3-cutpoint Proportional Odds markers highlights sharp 2017 Press-vs-Government polarization (OR = 0.35, p = 3.9e-59). Right: Pooled 6-G8 categorical Country ORs vs. Germany (Ref = 1.0) and nested LRTs.',
                    surface: 'light',
                },
                {
                    src: 'projects/world-value-survey/longitudinal-trust-trends.webp',
                    badge: '1995-2022 · 95% CIs',
                    title: 'Multi-Decade USA Institutional Divergence & G8 Government Evolution',
                    caption:
                        'Left: USA covariate-adjusted P(High Trust >= 3) stays 81-85% for Armed Forces and 67-73% for Police while Parliament (35% -> 14.7%) and Parties (19.9% -> 10.4%) collapse. Right: Germany (20% -> 43%), Canada, Japan, and Russia rise while USA and UK decline.',
                    surface: 'light',
                },
                {
                    src: 'projects/world-value-survey/lca-citizen-archetypes.webp',
                    badge: '4-Class EM LCA',
                    title: 'Latent Class Citizen Archetypes & Country Composition Across the G8',
                    caption:
                        'Left: Conditional P(High Trust >= 3) and P("A great deal") in brackets cleanly separate Moderate ("Quite a lot") from Strong ("A great deal") trustors (Entropy = 0.844). Right: USA/UK cluster in Rule-of-Law Pragmatists (49-55%), Germany/Canada/Japan lead Moderate Trustors, and Russia splits bimodally.',
                    surface: 'light',
                },
            ],
            takeaways: [
                'Splitting institutional trust into partisan/executive vs. rule-of-law domains resolves the global macro paradox: free press and democratic accountability encourage vocal executive skepticism (r = -0.53 with government trust), while clean governance strongly builds confidence in Police (r = +0.50) and Courts (r = +0.36).',
                'Within the 2017 USA Wave 7 cohort (n = 2,396, VIF 1.03-1.99), Ordered Logit coefficients capture acute partisan polarization: trusting The Press cut government-trust odds nearly threefold (OR = 0.35, p = 3.9e-59), while favoring a Strong Leader boosted them (OR = 1.40; Country interaction OR = 2.16 vs. Germany).',
                'Covariate-adjusted longitudinal probabilities (1995-2022) show no uniform global collapse of trust: US military and police trust held steady over 22 years while partisan branches eroded, and Germany, Canada, and Japan posted net gains in government trust while the USA and UK fell.',
                'Model-based 4-class EM Latent Class Analysis demonstrates why keeping all four ordinal levels matters: collapsing "Quite a lot" and "A great deal" into a binary indicator would erase the clear divide between measured democratic trustors (Germany/Canada/Japan) and high-intensity polarized trustors (Russia).',
            ],
        },
    },
    {
        id: 'social-scope',
        title: 'Social Scope',
        description: 'Image generation web application leveraging diffusion models and ComfyUI with an Angular frontend.',
        thumbnail: 'projects/socialscope/socialscope_thumb.webp',
        githubLink: 'https://github.com/r-a-j/socialscope',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/socialscope/refs/heads/main/README.md',
        techStack: ['Angular', 'Python', 'Flask', 'OpenAI API', 'ComfyUI', 'Diffusers'],
        rating: 4,
        category: 'Web App',
        year: 2024,
        language: 'TypeScript',
    },
    {
        id: 'regression-analysis',
        title: 'Multiple Linear Regression Analysis',
        description: 'Predictive modeling on anthropometric body measurements with multicollinearity diagnostics (VIF) and AIC/BIC model selection.',
        thumbnail: 'projects/regression-analysis/regression-analysis_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Regression-Analysis',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Regression-Analysis/refs/heads/main/README.md',
        techStack: ['Python', 'R', 'Linear Regression', 'VIF', 'AIC/BIC', 'pandas', 'Matplotlib'],
        rating: 4,
        category: 'Statistics',
        year: 2023,
        language: 'Python',
    },
    {
        id: 'comparison-multiple-distributions',
        title: 'Statistical Comparison of Multiple Distributions',
        description: 'Multi-group hypothesis testing of competitive swimming benchmarks using ANOVA, Kruskal-Wallis, and Holm-Bonferroni corrections.',
        thumbnail: 'projects/comparing-multiple-distributions/comparing-multiple-distributions_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Comparison-of-multiple-distributions',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Comparison-of-multiple-distributions/refs/heads/main/README.md',
        techStack: ['Python', 'ANOVA', 'Kruskal-Wallis', 'Holm-Bonferroni', 'SciPy', 'seaborn'],
        rating: 3,
        category: 'Statistics',
        year: 2023,
        language: 'Python',
    },
    {
        id: 'descriptive-analysis',
        title: 'Descriptive Demographic Analysis',
        description: 'Exploratory data analysis of global life expectancy and child mortality trends across 2002–2022 census data.',
        thumbnail: 'projects/descriptive-analysis/descriptive-analysis_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Descriptive-Analysis',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Descriptive-Analysis/refs/heads/master/readme.md',
        techStack: ['Python', 'EDA', 'pandas', 'seaborn', 'Matplotlib'],
        rating: 3,
        category: 'Analytics',
        year: 2023,
        language: 'Python',
    },
];
