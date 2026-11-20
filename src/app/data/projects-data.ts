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
        description: '44-year spatio-temporal study of Arctic sea ice decline comparing No-AR vs AR(1) models in Stan/brms with LOO-CV.',
        thumbnail: 'projects/applied-bayesian-data-analysis/applied-bayesian-data-analysis_thumb.webp',
        githubLink: 'https://github.com/r-a-j/Applied-Bayesian-Data-Analysis',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/Applied-Bayesian-Data-Analysis/refs/heads/main/README.md',
        techStack: ['R', 'Stan', 'brms', 'Bayesian Statistics', 'LOO-CV', 'ggplot2'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2025,
        language: 'R',
    },
    {
        id: 'simulation-based-inference',
        title: 'Simulation-Based Inference for LIF Neurons',
        description: 'Likelihood-free amortized parameter estimation for biophysical neuron dynamics using BayesFlow and Invertible Neural Networks.',
        thumbnail: 'projects/simulation-based-inference/simulation-based-inference.png',
        githubLink: 'https://github.com/r-a-j/simulation-based-inference',
        githubReadmeUrl: 'https://raw.githubusercontent.com/r-a-j/simulation-based-inference/refs/heads/main/README.md',
        techStack: ['Python', 'BayesFlow', 'TensorFlow', 'Neural Posterior Estimation', 'SciPy', 'NumPy'],
        rating: 5,
        category: 'Bayesian Statistics',
        year: 2025,
        language: 'Python',
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
