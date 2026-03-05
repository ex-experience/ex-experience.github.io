<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>フサム | experience™ - Experience Architecture</title>
    <style>
        :root {
            --bg-color: #070707;
            --text-main: #f5f5f5;
            --text-muted: #888;
            --accent: #ffffff;
            --card-bg: #121212;
        }
        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        header {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 20px;
        }
        h1 {
            font-size: 3rem;
            font-weight: 300;
            letter-spacing: -1px;
            margin-bottom: 10px;
            line-height: 1.2;
        }
        h2 {
            font-size: 1.5rem;
            font-weight: 400;
            color: var(--text-muted);
            margin-bottom: 40px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .subtitle {
            font-size: 1.2rem;
            max-width: 600px;
            margin-bottom: 50px;
            color: #ccc;
        }
        .btn {
            display: inline-block;
            padding: 16px 32px;
            background-color: var(--text-main);
            color: var(--bg-color);
            text-decoration: none;
            letter-spacing: 1px;
            font-weight: 600;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        .btn:hover {
            background-color: #ccc;
            transform: translateY(-2px);
        }
        .section {
            padding: 100px 0;
            border-top: 1px solid #222;
        }
        .section-title {
            font-size: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: var(--text-muted);
            margin-bottom: 50px;
            text-align: center;
        }
        h3 {
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 20px;
        }
        p {
            color: #b0b0b0;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }
        .methodology-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        .methodology-card {
            background: var(--card-bg);
            padding: 40px;
            border-radius: 8px;
            border: 1px solid #222;
        }
        .methodology-card h4 {
            font-size: 1.4rem;
            margin: 0 0 15px 0;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .methodology-card h4 span {
            color: var(--text-muted);
            font-size: 1rem;
        }
        ul.custom-list {
            list-style: none;
            padding: 0;
            color: #b0b0b0;
        }
        ul.custom-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        ul.custom-list li::before {
            content: "—";
            position: absolute;
            left: 0;
            color: var(--text-muted);
        }
        .highlight-box {
            background: var(--card-bg);
            padding: 40px;
            border-radius: 8px;
            text-align: center;
            margin: 40px 0;
            border: 1px solid #333;
        }
        footer {
            text-align: center;
            padding: 80px 20px 40px;
            border-top: 1px solid #222;
            color: var(--text-muted);
        }
        .footer-logo {
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: #fff;
        }
        .social-links a {
            color: #fff;
            text-decoration: none;
            margin: 0 15px;
            font-size: 0.9rem;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .social-links a:hover {
            color: var(--text-muted);
        }
    </style>
</head>
<body>

    <header>
        <h1>The line between ordinary and extraordinary</h1>
        <h2>Engineering the Human Experience</h2>
        <p class="subtitle">We do not design products.. We engineer human experience — from first sensation to lasting memory.</p>
        <a href="https://chat.google.com/room/AAQAWwvhelo?cls=7" class="btn" target="_blank">Request Strategic Conversation</a>
    </header>

    <div class="container">
        
        <section class="section">
            <div class="section-title">What is フサム | experience ?</div>
            <h3>フサム | experience™ is a concept house and strategic lab focused on Human Experience Engineering</h3>
            <p>We operate at the intersection of psychology, sensory design, and cinematic translation to transform interaction into memory. Where traditional marketing ends, experience architecture begins..</p>
            <p style="color: #fff; font-weight: 500; font-size: 1.3rem; margin-top: 30px;">This is not marketing.. This is experience architecture.</p>
        </section>

        <section class="section">
            <div class="section-title">The Silent Problem</div>
            <p>The world is full of content. Very few experiences are remembered. Brands, systems, and environments interact with people, but rarely leave a lasting emotional imprint.</p>
            <p>This gap is not a creative issue, <strong>It is an experience design failure.</strong></p>
            
            <div class="highlight-box">
                <h3 style="margin-top:0;">Human Experience Engineering</h3>
                <p style="margin-bottom: 20px; font-size: 0.9rem; letter-spacing: 2px; text-transform: uppercase; color: #888;">>> our work combines <<</p>
                <p style="color: #fff;">Behavioral Insight — Sensory Design — Ritual Engineering — Cinematic Translation</p>
                <p style="margin-top: 20px;">To create experiences that are felt, before they are understood.</p>
            </div>
        </section>

        <section class="section">
            <div class="section-title">HX-5™ Methodology</div>
            <p style="text-align: center; margin-bottom: 50px;">The HX-5™ Methodology is a proprietary architectural framework designed to bridge the gap between human perception and strategic execution. It moves beyond traditional design, engineering the fundamental relationship between humans and systems through five core pillars:</p>
            
            <div class="methodology-list">
                <div class="methodology-card">
                    <h4><span>01.</span> Intent</h4>
                    <p><strong>"Why should this experience exist?"</strong> Intent defines the existential purpose and the "moral compass" of the project. We do not design for utility alone; we establish the core value proposition that ensures every interaction serves a higher objective.</p>
                </div>
                <div class="methodology-card">
                    <h4><span>02.</span> Context</h4>
                    <p><strong>"Where, when, and under what conditions does it unfold?"</strong> An experience does not exist in a vacuum. We analyze the environmental, temporal, and psychological conditions surrounding the interaction to engineer seamless responses.</p>
                </div>
                <div class="methodology-card">
                    <h4><span>03.</span> Stimuli</h4>
                    <p><strong>"Which sensory triggers activate emotion?"</strong> Engineering the sensory inputs—visual, auditory, and tactile—to trigger specific emotional and neurological responses that bypass logical filters.</p>
                </div>
                <div class="methodology-card">
                    <h4><span>04.</span> Interaction</h4>
                    <p><strong>"How does the human participate?"</strong> This pillar governs the rhythm of engagement. We engineer the pathways that transform a person from a mere spectator into an active participant within the experience.</p>
                </div>
                <div class="methodology-card">
                    <h4><span>05.</span> Impact</h4>
                    <p><strong>"What remains after the experience ends?"</strong> The ultimate metric of success. We do not measure the duration of the event, but the "emotional residue" left behind—the long-term cognitive imprint.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div style="display: flex; flex-wrap: wrap; gap: 40px;">
                <div style="flex: 1; min-width: 300px;">
                    <h3>What We Do?</h3>
                    <p>We execute focused 4–6 week pilots designed to validate experience impact. Each pilot delivers:</p>
                    <ul class="custom-list">
                        <li>A designed human experience</li>
                        <li>Measured emotional and behavioral response</li>
                        <li>A short cinematic film (60–90 seconds)</li>
                        <li>A strategic case study</li>
                    </ul>
                </div>
                <div style="flex: 1; min-width: 300px;">
                    <h3>Why Pilots First?</h3>
                    <p>Ideas are not enough. Promises do not scale.</p>
                    <p>Pilots create <strong>proof of feeling</strong> before proof of concept. Experience must be demonstrated, not described.</p>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="highlight-box" style="background: transparent; border-color: #444;">
                <h3 style="font-size: 1.4rem;">Partnership Philosophy</h3>
                <p>We do not compete with our partners. We elevate them.</p>
                <p style="margin-bottom: 30px;">Partnership with フサム increases meaning, not exposure alone.</p>
                
                <h3 style="font-size: 1.4rem;">Who This Is For?</h3>
                <ul class="custom-list" style="display: inline-block; text-align: left;">
                    <li>Organizations seeking long-term impact</li>
                    <li>Investors focused on infrastructure, not hype</li>
                    <li>Brands that want to be remembered</li>
                    <li>Cultural and innovation-driven institutions</li>
                </ul>
                <p style="color: #fff; margin-top: 20px;">If you are looking for advertising, this is not for you.</p>
            </div>
        </section>

    </div>

    <footer>
        <div class="footer-logo">フサム | experience™</div>
        <p>Engineering the Human Experience</p>
        <p style="font-size: 0.85rem; margin-top: 20px;">All concepts protected through layered strategic disclosure.<br>Designed to be felt, not explained.</p>
        
        <div class="social-links" style="margin: 40px 0;">
            <a href="https://chat.whatsapp.com/GwViPRCCa9c0nYdOmB3hLL" target="_blank">Begin the Conversation</a>
            <a href="https://www.instagram.com/ex_experience.sa/" target="_blank">Instagram</a>
        </div>
        
        <p style="font-size: 0.8rem; color: #555;">© 2026 フサム | experience™. All rights reserved.</p>
    </footer>

</body>
</html>
