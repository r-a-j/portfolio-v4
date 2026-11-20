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
                'Key modeling extensions identified during course review: centering Year around 2000 for interpretable intercepts, adding region-specific random slopes (1 + Year_c | Region) to estimate distinct regional decline rates, and modeling monthly seasonal curves with splines or Gaussian processes.',
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
        description: 'From-scratch MCMC sampler in pure R estimating posterior distributions and uncertainty on the Pima Indians Diabetes dataset.',
        thumbnail: 'projects/comparing-multiple-distributions/comparing-multiple-distributions_thumb.webp',
        githubLink: 'https://github.com/r-a-j/On-the-Theory-and-Practice-of-Monte-Carlo-Simulations',
        githubReadmeUrl: '',
        techStack: ['R', 'MCMC', 'Metropolis-Hastings', 'Bayesian Statistics', 'LaTeX'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2026,
        language: 'R',
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
        title: 'Eye Tracking & Visual Saliency Analysis',
        description: 'Statistical modeling of age-related gaze patterns and spatial fixation distributions on the Nemo Science Museum dataset.',
        thumbnail: 'projects/eye-tracking/eye-tracking_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Eye-Tracking-Fixations',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Eye-Tracking-Fixations/refs/heads/main/README.md',
        techStack: ['Python', 'R', 'KDE Saliency', 'Hessels Classifier', 'pandas', 'SciPy', 'Matplotlib'],
        rating: 4,
        category: 'Statistics',
        year: 2024,
        language: 'Python',
    },
    {
        id: 'world-value-survey',
        title: 'World Values Survey Analysis',
        description: 'Cross-national study on institutional trust using ordinal logistic regression, mixed-effects models, and clustering across 60+ countries.',
        thumbnail: 'projects/world-value-survey/world-value-survey_thumb.webp',
        githubLink: 'https://github.com/r-a-j/World-Value-Survey',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/World-Value-Survey/refs/heads/main/README.md',
        techStack: ['Python', 'R', 'Ordinal Regression', 'K-Means', 'lme4', 'scikit-learn', 'pandas'],
        rating: 4,
        category: 'Machine Learning',
        year: 2025,
        language: 'Python',
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
