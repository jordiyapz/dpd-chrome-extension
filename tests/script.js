const panel = new DictionaryPanel();
panel.setText("Test");
panel.setContent(`<html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Pāḷi Dictionary</title>

    <style>
        :root {
    /* Background in light mode, text in dark mode */
    --light: hsl(198, 100%, 95%);
    --light-shade: hsl(198, 100%, 93%);

    /* Background in dark mode, text in light mode */
    --dark: hsl(198, 100%, 5%);
    --dark-shade: hsl(198, 100%, 7%);

    /* Primary colour used for logo, buttons, etc */
    --primary: hsl(198, 100%, 50%);

    /* Primary alternative used for pressed buttons */
    --primary-alt: hsl(205, 100%, 40%);

    /* Primary colour suitable for text in light and dark mode */
    --primary-text: hsl(205, 79%, 48%);

    /* Button shadows */
    --shadow-default: 2px 2px 4px hsla(0, 0%, 20%, 0.4);
    --shadow-hover: 2px 2px 4px hsla(0, 0%, 20%, 0.5);

    /* Various grays */
    --gray: hsl(0, 0%, 50%);
    --gray-light: hsl(0, 0%, 75%);
    --gray-dark: hsl(0, 0%, 25%);
    --gray-transparent: hsla(0, 0%, 50%, 0.25);

    /* Secondary colour just for help and abbreviations */
    --secondary: hsl(158, 100%, 35%);

    /* Frequency heatmap  */
    --freq0: hsla(198, 90%, 50%, 0.10);
    --freq1: hsla(200, 90%, 50%, 0.20);
    --freq2: hsla(202, 90%, 50%, 0.30);
    --freq3: hsla(204, 90%, 50%, 0.40);
    --freq4: hsla(206, 90%, 50%, 0.50);
    --freq5: hsla(208, 90%, 50%, 0.60);
    --freq6: hsla(210, 90%, 50%, 0.70);
    --freq7: hsla(212, 90%, 50%, 0.80);
    --freq8: hsla(214, 90%, 50%, 0.90);
    --freq9: hsla(216, 90%, 50%, 1.00);
    --freq10: hsla(218, 90%, 50%, 1.00);
}



body {
    font-family: "Inter", "sans-serif";
}

h3 {
    font-size: 130%;
    margin-top: 10px;
    margin-bottom: 1px;
}

div.dpd {
    border: 2px solid var(--primary);
    border-radius: 7px;
    line-height: 150%;
    margin: 0px 0px;
    overflow: auto;
    padding: 3px 7px;
    text-align: left;
}


p {
    line-height: 150%;
    margin: 0px 0px;
    vertical-align: middle;
    text-align: left;
}

b {
    font-weight: 700;
}

.epd {
    color: var(--primary-text);
}

.epd:hover {
    color: var(--primary-alt);
    text-decoration: underline;
}

a {
    color: var(--primary)
}

p.heading {
    margin: 0px 0px;
    padding: 2px 0px;
}

.underlined {
    border-bottom: 1px solid var(--primary);
    margin-bottom: 5px;
}

.overlined {
    border-top: 1px solid var(--primary);
    margin-top: 5px;
}

p.heading b {
    font-weight: 700;
}

p.footer {
    border-top: 1px solid var(--primary);
    font-size: 80%;
    padding: 5px 0px;
    margin-top: 5px;
}

hr {
    background-color: var(--gray-transparent);
    width: 100%;
    border: none;
    height: 1px;
    margin: 0;
    padding: 0;
    display: block;
}

/* tables */

table {
    margin: 3px 0px;

}

table.grammar {
    border: none;
}

table.grammar td,
table.grammar th {
    text-align: left;
    vertical-align: top;
    padding: 0px 0px;
}

table.grammar th {
    color: var(--primary-text);
    font-weight: 700;
    white-space: nowrap;
    padding: 0px 5px 2px 0px
}

table.grammar b {
    font-weight: 700;
}

/* sutta */

p.sutta {
    color: var(--primary-text);
    font-style: italic;
    padding: 0px 0px 3px 0px;
}

p.sbs_sutta {
    color: var(--colour3);
    font-style: italic;
    padding: 0px 0px 3px 0px;
}

a.sutta_link {
    color: var(--primary-text);
    font-style: italic;
    text-decoration: none;
    font-weight: bold
}

a.sutta_link:hover {
    color: var(--primary-alt);
    text-decoration: underline;
}

/* inflection tables */

table.inflection {
    width: 100%;
    padding: 0 0 5px 0px;
    border-radius: 7px;
    border-collapse: separate;
    border: none;
    /* border-spacing: 0; */
}

table.inflection td,
table.inflection th {
    border-collapse: separate;
    border-radius: 7px;
    /* border-spacing: 0; */
    border: 1px solid var(--gray);
    line-height: 150%;
    padding: 5px 5px;
    text-align: center;
    vertical-align: middle;
}

table.inflection th {
    border: 1px solid var(--primary);
    color: var(--primary-text);
    font-weight: 700;
    white-space: nowrap;
}

table.inflection tr:first-child th:first-child {
    border-top-left-radius: 7px;
}

table.inflection tr:first-child th:last-child {
    border-top-right-radius: 7px;
}

table.inflection tr:last-child td:first-child {
    border-bottom-left-radius: 7px;
}

table.inflection tr:last-child td:last-child {
    border-bottom-right-radius: 7px;
}

span.gray {
    color: var(--gray);
}

a.jump {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
}

/* family tables */

table.family {
    border: none;
}

table.family td,
table.family th {
    text-align: left;
    vertical-align: top;
}

table.family th {
    color: var(--primary-text);
    font-weight: 700;
    white-space: nowrap;
}

table.family td {
    padding-right: 7px;
}

table.family b {
    font-weight: 700;
}

/* buttons */

div.button-box {
    margin: 2px 0px 3px 0px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

a.button {
    background-color: var(--primary);
    border: 1px solid var(--primary);
    border-radius: 7px;
    color: var(--dark);
    cursor: pointer;
    display: inline-block;
    font-size: 80%;
    font-weight: 400;
    margin: 1px 1px 2px 1px;
    padding: 2px 5px;
    text-decoration: none;
    user-select: none;
    box-shadow: var(--shadow-default);
}

a.button.close {
    float: right;
    margin: 10px;
}

a.button.active {
    background-color: var(--primary-alt);
    border-color: var(--primary-alt);
    color: var(--light);
    user-select: none;
}

a.button:hover {
    box-shadow: var(--shadow-hover);
    border: 1px solid var(--primary-alt);
    background-color: var(--primary-alt);
    color: var(--light);
    user-select: none;
}

.link {
    color: var(--primary-text);
    font-weight: 700;
    text-decoration: none;
}

.link:hover {
    color: var(--primary-alt);
    text-decoration: underline;
}

.hidden {
    display: none;
}

/* freq tables */

table.freq {
    border-radius: 7px;
    border-collapse: separate;
    border: none;
}

.vertical-text {
    writing-mode: vertical-lr;
    text-orientation: upright;
    inline-size: fit-content;
}

table.freq thead th {
    text-align: center;
}

table.freq tbody th {
    border: 1px solid var(--primary);
    border-radius: 7px;
    padding: 5px;
    text-align: center;
    width: 12px;
    white-space: nowrap;
    vertical-align: middle;
}


table.freq td {
    border-collapse: separate;
    border-radius: 7px;
    border: 1px solid var(--gray-transparent);
    font-size: 0.8em;
    min-width: 30px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    width: 2.5em;
}

table.freq td.void {
    border: 0px solid transparent;
}

table.freq td.gap {
    border: 0px solid transparent;
    width: 10px;
}

table.freq td.gr0 {
    border: 1px solid var(--freq0);
    border-color: var(--gray-transparent);
    color: transparent;
}

.dark-mode table.freq td.gr0 {
    border: 1px solid var(--freq0);
    border-color: var(--gray-transparent);
    color: transparent;
}

table.freq td.gr1 {
    background-color: var(--freq1);
    border-color: var(--freq1);
    color: var(--dark);
}

table.freq td.gr2 {
    background-color: var(--freq2);
    border-color: var(--freq2);
    color: var(--dark);
}

table.freq td.gr3 {
    background-color: var(--freq3);
    border-color: var(--freq3);
    color: var(--dark);
}

table.freq td.gr4 {
    background-color: var(--freq4);
    border-color: var(--freq4);
    color: var(--dark);
}

table.freq td.gr5 {
    background-color: var(--freq5);
    border-color: var(--freq5);
    color: var(--dark);
}

table.freq td.gr6 {
    background-color: var(--freq6);
    border-color: var(--freq6);
    color: var(--light);
}

table.freq td.gr7 {
    background-color: var(--freq7);
    border-color: var(--freq7);
    color: var(--light);
}

table.freq td.gr8 {
    background-color: var(--freq8);
    border-color: var(--freq8);
    color: var(--light);
}

table.freq td.gr9 {
    background-color: var(--freq9);
    border-color: var(--freq9);
    color: var(--light);
}

table.freq td.gr10 {
    background-color: var(--freq10);
    border-color: var(--freq10);
    color: var(--light);
}

.dark-mode table.freq td {
    color: var(--light);
}

/* variant */

table.variants,
table.grammar_dict {
    border-collapse: collapse;
    border: none;
    line-height: 150%;
    margin: 0px;
    max-width: 100%;
    overflow: auto;
    padding: 2px 0px;
    text-align: left;
    vertical-align: top;
    width: auto;
}

.variants th,
.variants td,
.grammar_dict th,
.grammar_dict td {
    padding: 2px 10px 0px 0px;
    text-align: left;
    vertical-align: center;
}

.variants td:first-child,
.variants td:nth-child(2) {
    white-space: nowrap;
}

/* help */

div.tertiary {
    border: 2px solid var(--secondary);
    border-radius: 7px;
    line-height: 150%;
    margin: 0px 0px;
    overflow: auto;
    padding: 3px 5px;
    text-align: left;
}

table.help {
    border: none;
    width: 100%;
}

table.help td,
table.help th {
    line-height: 150%;
    padding: 0px 5px 0px 0px;
    text-align: left;
    vertical-align: top;
}

table.help th {
    color: var(--secondary);
    font-weight: 700;
    width: 10%;
}

table.help td {
    width: 90%;
}

table.help b {
    font-weight: 700;
}

/* roots */

table.root_info {
    border: none;
}

table.root_info td,
table.root_info th {
    text-align: left;
    vertical-align: top;
    padding: 0px 0px;
}

table.root_info th {
    color: var(--primary-text);
    font-weight: 700;
    white-space: normal;
    padding: 0px 5px 2px 0px
}

table.root_info b {
    font-weight: 700;
}

table.root_family td,
table.root_family th {
    text-align: left;
    vertical-align: top;
}

table.root_family th {
    color: var(--primary-text);
    font-weight: 700;
    white-space: nowrap;
}

table.root_family b {
    font-weight: 700;
}

table.root_matrix {
    width: 100%;
}

table.root_matrix th,
table.root_matrix td {
    border-radius: 5px;
    line-height: 150%;
    vertical-align: top;
    padding: 5px 5px;
    overflow: auto;
}

table.root_matrix th {
    border: 1px solid var(--primary);
    color: var(--primary-text);
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
}

table.root_matrix td {
    border: 1px solid var(--gray-transparent);
    text-align: left;
}

table.root_matrix td b {
    color: var(--primary-text);
    font-weight: 700;
    white-space: nowrap;
}

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,700;1,8..60,400;1,8..60,700&display=swap');


body {
    background-color: var(--light);
    color: var(--dark);
    font-family: 'Inter', sans-serif;
}

h2 {
    margin: 5px;
}

h3 {
    margin-top: 5px;
}


.summary-results b {
    font-weight: normal;
}

.summary-results h3 {
    margin-bottom: 10px;
}

.summary-results hr {
    margin-top: 20px;
    margin-bottom: 20px;
}

.summary-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
}

.dpd-pane {
    border-radius: 7px;
    border: 2px solid transparent;
    flex: 3;
    padding: 5px;
    overflow-y: auto;
    margin: 5px;
}
    </style>
    <script>
        
//// listen for button clicks

document.addEventListener("click", function(event) {
    var target = event.target;
    const classNames = ["button"]
    if (classNames.some(className => target.classList.contains(className))) {
        button_click(target);
        event.preventDefault();
    }
});

//// handle button clicks

function button_click(el) {
    let oneButtonToggleEnabled = false;
    try {
        oneButtonToggleEnabled = localStorage.getItem("one-button-toggle") === "true";
    } catch (e) {
        console.log("LocalStorage is not available.");
    }
    const target_id = el.getAttribute("data-target");
    var target = document.getElementById(target_id);
    
    if (target) {
        if (target.textContent.includes("loading...")) {
            loadData()
        };

        //// only open one button at a time

        if (oneButtonToggleEnabled) {
            var allButtons = document.querySelectorAll('.button');
            allButtons.forEach(function(button) {
                if (button !== el) { 
                    button.classList.remove("active");
                }
            });

            var allContentAreas = document.querySelectorAll('.content');
            allContentAreas.forEach(function(contentArea) {
                if (contentArea !== target && !contentArea.classList.contains("summary")) {
                    contentArea.classList.add("hidden");
                }
            });

            if (!target.classList.contains('summary')) {
                target.classList.toggle("hidden");
            }
        } else {
            target.classList.toggle("hidden");
        }

        if (el.classList.contains("close")) {
            var target_control = document.querySelector('a.button[data-target="' + target_id + '"]');
            if (target_control) {
                target_control.classList.toggle("active");
            }
        } else {
            el.classList.toggle("active");
        }
    }
}

    </script>
</head>


<body>
    <div class=" summary-results">
    <h3>Summary</h3>
    <p class="summary">
    <a class="summary-link" href="#namas">
        namas
    </a>
    masc. 
    <b>reverence (to); veneration (to); homage (to)</b>; lit. bow
    
    <a class="summary-link" href="#namas">►</a>
</p>

<p class="summary">
    <a class="summary-link" href="#nami_1">
        nami 1
    </a>
    aor. 
    <b>bent (towards); inclined (towards)</b>
    
    <a class="summary-link" href="#nami_1">►</a>
</p>

<p class="summary">
    <a class="summary-link" href="#nami_2">
        nami 2
    </a>
    aor. 
    bent, bowed down
    
    <a class="summary-link" href="#nami_2">►</a>
</p>

<p class="summary">
    <a class="summary-link" href="#namo">
        namo
    </a>
    ind. 
    <b>reverence (to); veneration (to); homage (to)</b>; lit. bow
    
    <a class="summary-link" href="#namo">►</a>
</p>


    <hr>
    </div>
    <div class="dpd-results" id="dpd-results">
        <!-- summary -->

<h3 id="namas">namas</h3>
<div class="dpd summary">
    <p>
        

        masc.
        
        (+dat)
        
        <b>reverence (to); veneration (to); homage (to)</b>; lit. bow
        
        [√nam + as]
        
        
        <span class="gray">✔</span>
        
    </p>
</div>


<!-- button box -->


<div class="button-box">
    
    <a class="button" name="grammar-button" href="#" data-target="grammar_namas">
        grammar</a>
    

    
    <a class="button" name="example-button" href="#" data-target="example_namas">
        example</a>
    

    

    

    

    
    <a class="button" href="#" data-target="declension_namas">
        declension</a>
    

    
    <a class="button" href="#" data-target="family_root_namas">
        root family</a>
    

    

    
    <a class="button" href="#" data-target="family_compound_namas">
        compound family</a>
    

    

    
    <a class="button" href="#" data-target="family_idiom_namas">
        idioms</a>
    

    

    

    
    <a class="button" href="#" data-target="frequency_namas">
        frequency</a>
    

    <a class="button" href="#" data-target="feedback_namas">
        feedback</a>
</div>


<!-- grammar -->



<div id="grammar_namas" name="grammar-div" class="dpd content hidden">
    <table class="grammar">
        <tbody><tr>
            <th>
                Pāḷi
            </th>
            <td>
                namas
            </td>
        </tr>
        <tr>
            <th>
                IPA
            </th>
            <td>
                /nɐmɐs/
            </td>
        </tr>

        

        <tr>
            <th>
                Grammar
            </th>
            <td>
                masc, mano group, from namati (+dat)
            </td>
        </tr>

        
        <tr>
            <th>
                Root Family
            </th>
            <td>
                √nam
            </td>
        </tr>
        

        
        <tr>
            <th>
                Root
            </th>
            <td>
                √nam<sup>･</sup>1
                a
                (bend)
            </td>
        </tr>
        

        

        

        
        <tr>
            <th>
                Construction
            </th>
            <td>
                √nam + as
            </td>
        </tr>
        

        
        <tr>
            <th>
                Derivative
            </th>
            <td>
                kita
                (as)
            </td>
        </tr>
        

        

        

        

        

        

        

        
        <tr>
            <th>
                Notes
            </th>
            <td>
                mano-group nouns, while neuter in Sanskrit, are considered to be masculine by classical Pāḷi grammars such as Saddanīti. The example given is <i>mano anicco, mano dukkho'ti</i>. Counter-examples are <i>amoghaṃ tapo</i> and <i>paramaṃ tapo</i>.
            </td>
        </tr>
        

        

        

        

        

        
        <tr>
            <th>
                Sanskrit
            </th>
            <td>
                <i>
                    namas [nam]
                </i>

            </td>
        </tr>
        

        
        <tr>
            <th>
                Sanskrit Root
            </th>
            <td>
                <i>
                    √nam
                    1
                    (bend, bow)
                </i>
            </td>
        </tr>
        
    </tbody></table>
    <p class="footer">
        Did you spot a mistake?
        <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Grammar&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
            Correct it here.</a>
    </p>
</div>


<!-- examples -->


<div id="example_namas" name="example-div" class="dpd content hidden">

    

        
        <p>
            <b>namo</b> tassa bhagavato arahato sammāsambuddhassa
        </p>
        <p class="sutta">
            
            <a class="sutta_link" href="https://www.thebuddhaswords.net/dn/dn21.html" target="_blank">
                DN21.8</a>
            
            sakkapañhasuttaṃ
        </p>

        

        <p class="footer">
            Can you think of a better example?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Examples&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Add it here.</a>
        </p>

    </div>
    

    <!-- sbs examples -->

    


    <!-- declension -->

    
    <div id="declension_namas" class="dpd content hidden">
        <p class="heading"><b>namas</b> is <b>as masc</b> declension (like <b>manas</b>)</p><table class="inflection"><tbody><tr><th></th><th>masc sg</th><th>masc pl</th></tr><tr><th>nom</th><td title="masc nom sg">nam<b>o</b></td><td title="masc nom pl">nam<b>ā</b><br><span class="gray">nam<b>āni</b></span></td></tr><tr><th>acc</th><td title="masc acc sg">nam<b>aṃ</b><br>nam<b>o</b></td><td title="masc acc pl">nam<b>e</b></td></tr><tr><th>instr</th><td title="masc instr sg"><span class="gray">nam<b>asā</b></span><br><span class="gray">nam<b>ena</b></span></td><td title="masc instr pl"><span class="gray">nam<b>ehi</b></span></td></tr><tr><th>dat</th><td title="masc dat sg"><span class="gray">nam<b>aso</b></span><br>nam<b>assa</b></td><td title="masc dat pl"><span class="gray">nam<b>ānaṃ</b></span></td></tr><tr><th>abl</th><td title="masc abl sg"><span class="gray">nam<b>ato</b></span><br><span class="gray">nam<b>amhā</b></span><br><span class="gray">nam<b>asā</b></span><br><span class="gray">nam<b>asmā</b></span><br>nam<b>ā</b></td><td title="masc abl pl"><span class="gray">nam<b>ehi</b></span></td></tr><tr><th>gen</th><td title="masc gen sg"><span class="gray">nam<b>aso</b></span><br>nam<b>assa</b></td><td title="masc gen pl"><span class="gray">nam<b>ānaṃ</b></span></td></tr><tr><th>loc</th><td title="masc loc sg"><span class="gray">nam<b>amhi</b></span><br><span class="gray">nam<b>asi</b></span><br><span class="gray">nam<b>asmiṃ</b></span><br>nam<b>e</b></td><td title="masc loc pl"><span class="gray">nam<b>esu</b></span></td></tr><tr><th>voc</th><td title="masc voc sg">nam<b>a</b><br>nam<b>ā</b></td><td title="masc voc pl">nam<b>ā</b></td></tr><tr><th>in comps</th><td title="in comps">nam<b>a</b><br>nam<b>o</b></td><td title=""></td></tr></tbody></table>
        
        <p>
            Inflections not found in the Chaṭṭha Saṅgāyana corpus, or within processed sandhi compounds are <span class="gray">grayed out</span>. They might still occur elsewhere, within compounds or in other versions
            of the Pāḷi texts.
        </p>
        <p class="footer">
            
            Did you spot a mistake in the declension table?
            Something missing?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfKUBx-icfRCWmhHqUwzX60BVQE21s_NERNfU2VvbjEfE371A/viewform?usp=pp_url&amp;entry.1370304754=namas&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here.</a>
        </p>
    </div>
    


    <!-- conjugation -->


    


    <!-- root family -->


    
    <div id="family_root_namas" class="dpd content hidden">
        <p class="heading underlined"><b>27</b> words belong to the root family <b>√nam</b> (bend)</p><table class="family"><tbody><tr><th>anata ¹</th><td><b>pp</b></td><td>unbent; without inclination; epithet of Nibbāna</td><td><span class="gray">✔</span></td></tr><tr><th>anata ²</th><td><b>pp</b></td><td>free from sham; lit. not bent</td><td><span class="gray">✘</span></td></tr><tr><th>anati ²·¹</th><td><b>fem</b></td><td>non-inclination</td><td><span class="gray">✘</span></td></tr><tr><th>anamanta</th><td><b>prp</b></td><td>not bending</td><td><span class="gray">◑</span></td></tr><tr><th>anāmetvā</th><td><b>abs</b></td><td>having not bent; lit. having not caused to bend</td><td><span class="gray">✔</span></td></tr><tr><th>nata ¹</th><td><b>pp</b></td><td>bent, stooped, inclined</td><td><span class="gray">✘</span></td></tr><tr><th>nata ²</th><td><b>pp</b></td><td>bowed; bent in homage; turned towards; (comm) inclined; lit. bent</td><td><span class="gray">✔</span></td></tr><tr><th>nati</th><td><b>fem</b></td><td>inclination; tendency; bent; bias; lit. bend</td><td><span class="gray">✔</span></td></tr><tr><th>namati ¹</th><td><b>pr</b></td><td>bends (towards); inclines (to); veers (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>namati ²</th><td><b>pr</b></td><td>bows down; pays respect; worships (someone with)</td><td><span class="gray">✔</span></td></tr><tr><th>namana</th><td><b>nt</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namanta</th><td><b>prp</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namayati</th><td><b>pr</b></td><td>makes straight; bends straight; lit. causes to bend</td><td><span class="gray">✔</span></td></tr><tr><th>namas</th><td><b>masc</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nami ¹</th><td><b>aor</b></td><td>bent (towards); inclined (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>nami ²</th><td><b>aor</b></td><td>bent, bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitabba</th><td><b>ptp</b></td><td>should be bent, should be bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitvā</th><td><b>abs</b></td><td>having bent, having bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>nameti</th><td><b>pr</b></td><td>bends; straightens</td><td><span class="gray">✘</span></td></tr><tr><th>namenta</th><td><b>prp</b></td><td>bending; straightening</td><td><span class="gray">✘</span></td></tr><tr><th>namo</th><td><b>ind</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nāmana</th><td><b>nt</b></td><td>bending; lit. causing to bend</td><td><span class="gray">◑</span></td></tr><tr><th>nāmita</th><td><b>pp</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmitvā</th><td><b>abs</b></td><td>having bent; having wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmeti</th><td><b>pr</b></td><td>bends, wields</td><td><span class="gray">✘</span></td></tr><tr><th>nāmetvā</th><td><b>abs</b></td><td>having caused to bend; having bent someone over</td><td><span class="gray">✔</span></td></tr><tr><th>nāmesi</th><td><b>aor</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr></tbody></table>
        <p class="footer">
            Something out of place?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Root+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here</a>.
        </p>
    </div>
    

    <!-- word family -->

    

    <!-- compound family -->

    
    <div id="family_compound_namas" class="dpd content hidden">
        <p class="heading underlined">
            <b>
                1
            </b>
            compounds which contains
            <b>
                namas
            </b>
            </p><table class="family"><tbody><tr><th>namakāra</th><td><b>masc</b></td><td>paying homage; act of veneration</td><td><span class="gray">◑</span></td></tr></tbody></table>
        <p></p>
        <p class="footer">
            Spot a mistake?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Compound+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Fix it here</a>.
        </p>
    </div>
    

    <!-- compound families -->

    

    <!-- idioms -->

    
    <div id="family_idiom_namas" class="dpd content hidden">
        
        
        <p class="heading underlined">
            
            
            <b>3</b>
            idiomatic expressions which contain
            <b>namas</b>
            
        </p>
        <table class="family"><tbody><tr><th>namatthu</th><td><b>sandhi</b></td><td>homage (to); salutation (to); lit. may there be homage</td><td><span class="gray">✔</span></td></tr><tr><th>namo karoti</th><td><b>idiom</b></td><td>pays respect (to); venerates; lit. makes a bow</td><td><span class="gray">✔</span></td></tr><tr><th>namo te</th><td><b>idiom</b></td><td>homage to you; honour to you</td><td><span class="gray">✔</span></td></tr></tbody></table>
        
        <p class="footer">
            Please add more idioms
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Idioms&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                here</a>.
        </p>
    </div>
    


    <!-- set -->

    

    <!-- sets -->

    

    

    <!-- frequency -->

    
    <div id="frequency_namas" class="dpd content hidden">

        
        <p class="heading underlined">

            
            Frequency of <b>namas</b> and its declensions
            

            </p><table class="freq">
<thead>
<tr>
<th></th>
<th></th>
<th colspan="3" title="Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)">
<b>
CST
</b>
</th>
<th></th>
<th colspan="2" title="Buddha Jayanti Tipiṭaka (Sri Lanka)">
<b>
BJT
</b>
</th>
<th></th>
<th colspan="2" title="Syāmaraṭṭha 1927 Royal Edition (Thailand)">
<b>
SYA
</b>
</th>
<th></th>
<th colspan="1" title="Mahāsaṅgīti Tipiṭaka (Sutta Central)">
<b>
MST
</b>
</th>
</tr>
<tr style="text-align: right;">
<th></th>
<th></th>
<!-- CST -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th title="ṭīkā">Ṭ</th>
<th></th>
<!-- BJT -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SYA -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SC -->
<th title="mūla">M</th>
</tr>
</thead>
<tbody>
<tr>
<th class="vertical-text" rowspan="6">Vinaya</th>
</tr>
<tr>
<th>Pārājika</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gr5" rowspan="5">70</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">6</td>
<td class="gr1" rowspan="5">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Pācittiya</th>
<!-- CST -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">4</td>
</tr>
<tr>
<th>Mahāvagga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Cūḷavagga</th>
<!-- CST -->
<td class="gr1">4</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">4</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">4</td>
</tr>
<tr>
<th>Parivāra</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Sutta</th>
</tr>
<tr>
<th>Dīgha</th>
<!-- CST -->
<td class="gr1">20</td>
<td class="gr1">11</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">22</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr1">12</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">19</td>
</tr>
<tr>
<th>Majjhima</th>
<!-- CST -->
<td class="gr1">17</td>
<td class="gr1">11</td>
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">15</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Saṃyutta</th>
<!-- CST -->
<td class="gr1">15</td>
<td class="gr1">10</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">17</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">21</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Aṅguttara</th>
<!-- CST -->
<td class="gr2">25</td>
<td class="gr1">20</td>
<td class="gr1">13</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">22</td>
<td class="gr1">19</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">25</td>
<td class="gr1">12</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Khuddaka 1</th>
<!-- CST -->
<td class="gr1">20</td>
<td class="gr5">66</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">19</td>
<td class="gr5">63</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">10</td>
<td class="gr5">68</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">16</td>
</tr>
<tr>
<th>Khuddaka 2</th>
<!-- CST -->
<td class="gr5">69</td>
<td class="gr5">71</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr6">73</td>
<td class="gr5">70</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr6">79</td>
<td class="gr5">63</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr5">68</td>
</tr>
<tr>
<th>Khuddaka 3</th>
<!-- CST -->
<td class="gr1">11</td>
<td class="gr1">7</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">12</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">11</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Abhidhamma</th>
</tr>
<tr>
<th>Dhammasaṅgaṇī</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gr1" rowspan="7">20</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Vibhaṅga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Dhātukathā</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Puggalapaññatti</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<!-- included in dhātukathā-->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Kathāvatthu</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Yamaka</th>
<!-- CST -->
<td class="gr1">10</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Paṭṭhāna</th>
<!-- CST -->
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">25</td>
</tr>
<tr>
<th class="vertical-text" rowspan="10">Aññā</th>
</tr>
<tr>
<th>Visuddhimagga</th>
<!-- CST -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- BJT -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="void"></td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="void"></td>
</tr>
<tr>
<th>Leḍī Sayāḍo</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">16</td>
</tr>
<tr>
<th>Buddhavandanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr10">128</td>
</tr>
<tr>
<th>Vaṃsa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">4</td>
</tr>
<tr>
<th>Byākaraṇa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr8">98</td>
</tr>
<tr>
<th>Pucchavissajjanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">7</td>
</tr>
<tr>
<th>Nīti</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">20</td>
</tr>
<tr>
<th>Pakiṇṇaka</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">16</td>
</tr>
<tr>
<th>Sihaḷa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">14</td>
</tr>
</tbody>
</table>
<p>
<b>CST</b>: Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)
</p>
<p>
<b>BJT</b>: Buddha Jayanti Tipiṭaka (Sri Lanka)
</p>
<p>
<b>SYA</b>: Syāmaraṭṭha 1927 Royal Edition (Thailand)
</p>
<p>
<b>MST</b>: Mahāsaṅgīti Tipiṭaka (Sutta Central)
</p>

            


        <p>
            For a detailed explanation of how this word frequency chart is calculated, it's accuracies and inaccuracies,
            please refer to
            <a class="link" href="https://digitalpalidictionary.github.io/features/frequency/" target="_blank">
                this webpage
            </a>.
        </p>
        <p class="footer">
            If something looks out of place,
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.326955045=Frequency&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                log it here.
            </a>
        </p>
    </div>
    

    <!-- feedback -->

    <div id="feedback_namas" class="dpd content hidden">
        <p>
            ID <b>35781</b>
        </p>
        <p>
            Digital Pāḷi Dictionary is a work in progress, made available for testing and feedback purposes.
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">Add a missing word</a><span>. Please use this </span>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                online form</a>
            to add missing words, especially from Vinaya, commentaries, and other later texts.
            If you prefer to work offline, here is a
            <a class="link" download="true" href="https://github.com/digitalpalidictionary/dpd-db/raw/main/misc/DPD%20Add%20Words.xlsx" target="_blank">
                spreadsheet to download</a><span>, fill in and submit. </span>
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namas&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Correct a mistake
            </a>
            <span>
                . Did you spot a mistake in the dictionary? Have something to add? Please report it. It generally takes
                less than a minute and your corrections and suggestions help to improve the quality of this dictionary
                for everyone who uses it.
            </span>
        </p>
        <p>
            <a class="link" href="https://digitalpalidictionary.github.io/" target="_blank">
                Read the docs
            </a>
            <span>
                . Get more detailed information about installation on your devices, upgrades, advanced settings and
                features.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=I%20want%20to%20help!&amp;body=Please%20let%20me%20know%20how%20I%20can%20get%20involved%20with%20the%20development%20of%20DPD.">
                Get involved
            </a>
            <span>
                . If you're a Pāḷi specialist or a coder, or would like to contribute to the project in any way, please
                get in touch.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=Keep%20me%20updated!&amp;body=Please%20let%20me%20know%20about%20new%20features%20and%20updates%20as%20soon%20as%20they%20are%20available.">
                Join the mailing list
            </a>
            <span>
                . Get notified of updates and new features as soon as they become available.
            </span>
        </p>
    </div>

    <!-- fin --><!-- summary -->

<h3 id="nami_1">nami 1</h3>
<div class="dpd summary">
    <p>
        

        aor.
        
        (+dat)
        
        <b>bent (towards); inclined (towards)</b>
        
        [√nam + i]
        
        
        <span class="gray">✔</span>
        
    </p>
</div>


<!-- button box -->


<div class="button-box">
    
    <a class="button" name="grammar-button" href="#" data-target="grammar_nami_1">
        grammar</a>
    

    
    <a class="button" name="example-button" href="#" data-target="example_nami_1">
        example</a>
    

    

    

    
    <a class="button" href="#" data-target="conjugation_nami_1">
        conjugation</a>
    

    

    
    <a class="button" href="#" data-target="family_root_nami_1">
        root family</a>
    

    

    

    

    

    

    

    
    <a class="button" href="#" data-target="frequency_nami_1">
        frequency</a>
    

    <a class="button" href="#" data-target="feedback_nami_1">
        feedback</a>
</div>


<!-- grammar -->



<div id="grammar_nami_1" name="grammar-div" class="dpd content hidden">
    <table class="grammar">
        <tbody><tr>
            <th>
                Pāḷi
            </th>
            <td>
                nami
            </td>
        </tr>
        <tr>
            <th>
                IPA
            </th>
            <td>
                /nɐmi/
            </td>
        </tr>

        

        <tr>
            <th>
                Grammar
            </th>
            <td>
                aor of namati, intrans (+dat)
            </td>
        </tr>

        
        <tr>
            <th>
                Root Family
            </th>
            <td>
                √nam
            </td>
        </tr>
        

        
        <tr>
            <th>
                Root
            </th>
            <td>
                √nam<sup>･</sup>1
                a
                (bend)
            </td>
        </tr>
        

        

        

        
        <tr>
            <th>
                Construction
            </th>
            <td>
                √nam + i
            </td>
        </tr>
        

        

        

        

        

        
        <tr>
            <th>
                Synonym
            </th>
            <td>
                abhininnāmesi
            </td>
        </tr>
        

        

        

        

        

        

        

        

        
        <tr>
            <th>
                Sanskrit
            </th>
            <td>
                <i>
                    anaṃsīt [nam]
                </i>

            </td>
        </tr>
        

        
        <tr>
            <th>
                Sanskrit Root
            </th>
            <td>
                <i>
                    √nam
                    1
                    (bend, bow)
                </i>
            </td>
        </tr>
        
    </tbody></table>
    <p class="footer">
        Did you spot a mistake?
        <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%201&amp;entry.326955045=Grammar&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
            Correct it here.</a>
    </p>
</div>


<!-- examples -->


<div id="example_nami_1" name="example-div" class="dpd content hidden">

    

        
        <p>
            itiha, bhikkhave, vipassissa bhagavato arahato sammāsambuddhassa paṭisañcikkhato app'ossukkatāya cittaṃ <b>nami</b>, no dhammadesanāya.
        </p>
        <p class="sutta">
            
            <a class="sutta_link" href="https://www.thebuddhaswords.net/dn/dn14.html" target="_blank">
                DN14</a>
            
            mahāpadānasuttaṃ, brahmayācanakathā
        </p>

        

        <p class="footer">
            Can you think of a better example?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%201&amp;entry.326955045=Examples&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Add it here.</a>
        </p>

    </div>
    

    <!-- sbs examples -->

    


    <!-- declension -->

    


    <!-- conjugation -->


    
    <div id="conjugation_nami_1" class="dpd content hidden">
        <p class="heading"><b>nami ¹</b> is <b>i aor</b> conjugation (like <b>tenupasaṅkami</b>)</p><table class="inflection"><tbody><tr><th></th><th>sg</th><th>pl</th><th>reflexive sg</th><th>reflexive pl</th></tr><tr><th>aor 3rd</th><td title="aor 3rd sg">nam<b>i</b><br>nam<b>ī</b></td><td title="aor 3rd pl"><span class="gray">nam<b>iṃsu</b></span><br><span class="gray">nam<b>uṃ</b></span></td><td title="reflx aor 3rd sg">nam<b>atha</b><br>nam<b>ā</b><br><span class="gray">nam<b>ittha</b></span></td><td title="reflx aor 3rd pl"><span class="gray">nam<b>aruṃ</b></span><br><span class="gray">nam<b>ū</b></span></td></tr><tr><th>aor 2nd</th><td title="aor 2nd sg">nam<b>i</b><br>nam<b>o</b></td><td title="aor 2nd pl"><span class="gray">nam<b>ittha</b></span></td><td title="reflx aor 2nd sg"><span class="gray">nam<b>ittho</b></span><br><span class="gray">nam<b>ise</b></span></td><td title="reflx aor 2nd pl"><span class="gray">nam<b>ivhaṃ</b></span></td></tr><tr><th>aor 1st</th><td title="aor 1st sg"><span class="gray">nam<b>iṃ</b></span></td><td title="aor 1st pl"><span class="gray">nam<b>imha</b></span><br><span class="gray">nam<b>imhā</b></span></td><td title="reflx aor 1st sg">nam<b>a</b><br>nam<b>aṃ</b><br><span class="gray">nam<b>itthaṃ</b></span></td><td title="reflx aor 1st pl"><span class="gray">nam<b>imhase</b></span><br><span class="gray">nam<b>imhe</b></span></td></tr></tbody></table>
        
        <p>
            Inflections not found in the Chaṭṭha Saṅgāyana corpus, or within processed sandhi compounds are <span class="gray">grayed out</span>. They might still occur elsewhere, within compounds or in other versions
            of the Pāḷi texts.
        </p>
        <p class="footer">
            
            Did you spot a mistake in the conjugation table?
            Something missing?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdAL2PzavyrtXgGmtNrZAMyh3hV6g3fU0chxhWFxunQEZtH0g/viewform?usp=pp_url&amp;entry.1932605469=nami%201&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here.</a>
        </p>
    </div>
    


    <!-- root family -->


    
    <div id="family_root_nami_1" class="dpd content hidden">
        <p class="heading underlined"><b>27</b> words belong to the root family <b>√nam</b> (bend)</p><table class="family"><tbody><tr><th>anata ¹</th><td><b>pp</b></td><td>unbent; without inclination; epithet of Nibbāna</td><td><span class="gray">✔</span></td></tr><tr><th>anata ²</th><td><b>pp</b></td><td>free from sham; lit. not bent</td><td><span class="gray">✘</span></td></tr><tr><th>anati ²·¹</th><td><b>fem</b></td><td>non-inclination</td><td><span class="gray">✘</span></td></tr><tr><th>anamanta</th><td><b>prp</b></td><td>not bending</td><td><span class="gray">◑</span></td></tr><tr><th>anāmetvā</th><td><b>abs</b></td><td>having not bent; lit. having not caused to bend</td><td><span class="gray">✔</span></td></tr><tr><th>nata ¹</th><td><b>pp</b></td><td>bent, stooped, inclined</td><td><span class="gray">✘</span></td></tr><tr><th>nata ²</th><td><b>pp</b></td><td>bowed; bent in homage; turned towards; (comm) inclined; lit. bent</td><td><span class="gray">✔</span></td></tr><tr><th>nati</th><td><b>fem</b></td><td>inclination; tendency; bent; bias; lit. bend</td><td><span class="gray">✔</span></td></tr><tr><th>namati ¹</th><td><b>pr</b></td><td>bends (towards); inclines (to); veers (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>namati ²</th><td><b>pr</b></td><td>bows down; pays respect; worships (someone with)</td><td><span class="gray">✔</span></td></tr><tr><th>namana</th><td><b>nt</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namanta</th><td><b>prp</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namayati</th><td><b>pr</b></td><td>makes straight; bends straight; lit. causes to bend</td><td><span class="gray">✔</span></td></tr><tr><th>namas</th><td><b>masc</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nami ¹</th><td><b>aor</b></td><td>bent (towards); inclined (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>nami ²</th><td><b>aor</b></td><td>bent, bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitabba</th><td><b>ptp</b></td><td>should be bent, should be bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitvā</th><td><b>abs</b></td><td>having bent, having bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>nameti</th><td><b>pr</b></td><td>bends; straightens</td><td><span class="gray">✘</span></td></tr><tr><th>namenta</th><td><b>prp</b></td><td>bending; straightening</td><td><span class="gray">✘</span></td></tr><tr><th>namo</th><td><b>ind</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nāmana</th><td><b>nt</b></td><td>bending; lit. causing to bend</td><td><span class="gray">◑</span></td></tr><tr><th>nāmita</th><td><b>pp</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmitvā</th><td><b>abs</b></td><td>having bent; having wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmeti</th><td><b>pr</b></td><td>bends, wields</td><td><span class="gray">✘</span></td></tr><tr><th>nāmetvā</th><td><b>abs</b></td><td>having caused to bend; having bent someone over</td><td><span class="gray">✔</span></td></tr><tr><th>nāmesi</th><td><b>aor</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr></tbody></table>
        <p class="footer">
            Something out of place?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%201&amp;entry.326955045=Root+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here</a>.
        </p>
    </div>
    

    <!-- word family -->

    

    <!-- compound family -->

    

    <!-- compound families -->

    

    <!-- idioms -->

    


    <!-- set -->

    

    <!-- sets -->

    

    

    <!-- frequency -->

    
    <div id="frequency_nami_1" class="dpd content hidden">

        
        <p class="heading underlined">

            
            Frequency of <b>nami 1</b> and its conjugations
            

            </p><table class="freq">
<thead>
<tr>
<th></th>
<th></th>
<th colspan="3" title="Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)">
<b>
CST
</b>
</th>
<th></th>
<th colspan="2" title="Buddha Jayanti Tipiṭaka (Sri Lanka)">
<b>
BJT
</b>
</th>
<th></th>
<th colspan="2" title="Syāmaraṭṭha 1927 Royal Edition (Thailand)">
<b>
SYA
</b>
</th>
<th></th>
<th colspan="1" title="Mahāsaṅgīti Tipiṭaka (Sutta Central)">
<b>
MST
</b>
</th>
</tr>
<tr style="text-align: right;">
<th></th>
<th></th>
<!-- CST -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th title="ṭīkā">Ṭ</th>
<th></th>
<!-- BJT -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SYA -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SC -->
<th title="mūla">M</th>
</tr>
</thead>
<tbody>
<tr>
<th class="vertical-text" rowspan="6">Vinaya</th>
</tr>
<tr>
<th>Pārājika</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gr9" rowspan="5">78</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">6</td>
<td class="gr1" rowspan="5">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Pācittiya</th>
<!-- CST -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">4</td>
</tr>
<tr>
<th>Mahāvagga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Cūḷavagga</th>
<!-- CST -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">4</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">3</td>
</tr>
<tr>
<th>Parivāra</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Sutta</th>
</tr>
<tr>
<th>Dīgha</th>
<!-- CST -->
<td class="gr2">23</td>
<td class="gr2">16</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr3">24</td>
<td class="gr1">15</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">17</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">21</td>
</tr>
<tr>
<th>Majjhima</th>
<!-- CST -->
<td class="gr2">17</td>
<td class="gr2">17</td>
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">15</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr2">17</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Saṃyutta</th>
<!-- CST -->
<td class="gr1">15</td>
<td class="gr2">16</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">16</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Aṅguttara</th>
<!-- CST -->
<td class="gr3">25</td>
<td class="gr2">22</td>
<td class="gr1">14</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">22</td>
<td class="gr2">21</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr3">25</td>
<td class="gr1">14</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Khuddaka 1</th>
<!-- CST -->
<td class="gr2">20</td>
<td class="gr8">71</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">18</td>
<td class="gr8">68</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">9</td>
<td class="gr9">72</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">16</td>
</tr>
<tr>
<th>Khuddaka 2</th>
<!-- CST -->
<td class="gr8">67</td>
<td class="gr9">73</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr8">67</td>
<td class="gr9">72</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr9">76</td>
<td class="gr7">63</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr8">66</td>
</tr>
<tr>
<th>Khuddaka 3</th>
<!-- CST -->
<td class="gr2">18</td>
<td class="gr1">7</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">12</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">18</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Abhidhamma</th>
</tr>
<tr>
<th>Dhammasaṅgaṇī</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gr2" rowspan="7">21</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Vibhaṅga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Dhātukathā</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Puggalapaññatti</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<!-- included in dhātukathā-->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Kathāvatthu</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Yamaka</th>
<!-- CST -->
<td class="gr1">10</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Paṭṭhāna</th>
<!-- CST -->
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr3">25</td>
</tr>
<tr>
<th class="vertical-text" rowspan="10">Aññā</th>
</tr>
<tr>
<th>Visuddhimagga</th>
<!-- CST -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- BJT -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="void"></td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="void"></td>
</tr>
<tr>
<th>Leḍī Sayāḍo</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">17</td>
</tr>
<tr>
<th>Buddhavandanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr4">34</td>
</tr>
<tr>
<th>Vaṃsa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">3</td>
</tr>
<tr>
<th>Byākaraṇa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr10">84</td>
</tr>
<tr>
<th>Pucchavissajjanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">7</td>
</tr>
<tr>
<th>Nīti</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">14</td>
</tr>
<tr>
<th>Pakiṇṇaka</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">16</td>
</tr>
<tr>
<th>Sihaḷa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">17</td>
</tr>
</tbody>
</table>
<p>
<b>CST</b>: Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)
</p>
<p>
<b>BJT</b>: Buddha Jayanti Tipiṭaka (Sri Lanka)
</p>
<p>
<b>SYA</b>: Syāmaraṭṭha 1927 Royal Edition (Thailand)
</p>
<p>
<b>MST</b>: Mahāsaṅgīti Tipiṭaka (Sutta Central)
</p>

            


        <p>
            For a detailed explanation of how this word frequency chart is calculated, it's accuracies and inaccuracies,
            please refer to
            <a class="link" href="https://digitalpalidictionary.github.io/features/frequency/" target="_blank">
                this webpage
            </a>.
        </p>
        <p class="footer">
            If something looks out of place,
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%201&amp;entry.326955045=Frequency&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                log it here.
            </a>
        </p>
    </div>
    

    <!-- feedback -->

    <div id="feedback_nami_1" class="dpd content hidden">
        <p>
            ID <b>35795</b>
        </p>
        <p>
            Digital Pāḷi Dictionary is a work in progress, made available for testing and feedback purposes.
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">Add a missing word</a><span>. Please use this </span>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                online form</a>
            to add missing words, especially from Vinaya, commentaries, and other later texts.
            If you prefer to work offline, here is a
            <a class="link" download="true" href="https://github.com/digitalpalidictionary/dpd-db/raw/main/misc/DPD%20Add%20Words.xlsx" target="_blank">
                spreadsheet to download</a><span>, fill in and submit. </span>
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%201&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Correct a mistake
            </a>
            <span>
                . Did you spot a mistake in the dictionary? Have something to add? Please report it. It generally takes
                less than a minute and your corrections and suggestions help to improve the quality of this dictionary
                for everyone who uses it.
            </span>
        </p>
        <p>
            <a class="link" href="https://digitalpalidictionary.github.io/" target="_blank">
                Read the docs
            </a>
            <span>
                . Get more detailed information about installation on your devices, upgrades, advanced settings and
                features.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=I%20want%20to%20help!&amp;body=Please%20let%20me%20know%20how%20I%20can%20get%20involved%20with%20the%20development%20of%20DPD.">
                Get involved
            </a>
            <span>
                . If you're a Pāḷi specialist or a coder, or would like to contribute to the project in any way, please
                get in touch.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=Keep%20me%20updated!&amp;body=Please%20let%20me%20know%20about%20new%20features%20and%20updates%20as%20soon%20as%20they%20are%20available.">
                Join the mailing list
            </a>
            <span>
                . Get notified of updates and new features as soon as they become available.
            </span>
        </p>
    </div>

    <!-- fin --><!-- summary -->

<h3 id="nami_2">nami 2</h3>
<div class="dpd summary">
    <p>
        

        aor.
        
        bent, bowed down
        
        [√nam]
        
        
        <span class="gray">✘</span>
        
    </p>
</div>


<!-- button box -->


<div class="button-box">
    

    

    

    

    
    <a class="button" href="#" data-target="conjugation_nami_2">
        conjugation</a>
    

    

    
    <a class="button" href="#" data-target="family_root_nami_2">
        root family</a>
    

    

    

    

    

    

    

    
    <a class="button" href="#" data-target="frequency_nami_2">
        frequency</a>
    

    <a class="button" href="#" data-target="feedback_nami_2">
        feedback</a>
</div>


<!-- grammar -->




<!-- examples -->



        

    <!-- sbs examples -->

    


    <!-- declension -->

    


    <!-- conjugation -->


    
    <div id="conjugation_nami_2" class="dpd content hidden">
        <p class="heading"><b>nami ²</b> is <b>i aor</b> conjugation (like <b>tenupasaṅkami</b>)</p><table class="inflection"><tbody><tr><th></th><th>sg</th><th>pl</th><th>reflexive sg</th><th>reflexive pl</th></tr><tr><th>aor 3rd</th><td title="aor 3rd sg">nam<b>i</b><br>nam<b>ī</b></td><td title="aor 3rd pl"><span class="gray">nam<b>iṃsu</b></span><br><span class="gray">nam<b>uṃ</b></span></td><td title="reflx aor 3rd sg">nam<b>atha</b><br>nam<b>ā</b><br><span class="gray">nam<b>ittha</b></span></td><td title="reflx aor 3rd pl"><span class="gray">nam<b>aruṃ</b></span><br><span class="gray">nam<b>ū</b></span></td></tr><tr><th>aor 2nd</th><td title="aor 2nd sg">nam<b>i</b><br>nam<b>o</b></td><td title="aor 2nd pl"><span class="gray">nam<b>ittha</b></span></td><td title="reflx aor 2nd sg"><span class="gray">nam<b>ittho</b></span><br><span class="gray">nam<b>ise</b></span></td><td title="reflx aor 2nd pl"><span class="gray">nam<b>ivhaṃ</b></span></td></tr><tr><th>aor 1st</th><td title="aor 1st sg"><span class="gray">nam<b>iṃ</b></span></td><td title="aor 1st pl"><span class="gray">nam<b>imha</b></span><br><span class="gray">nam<b>imhā</b></span></td><td title="reflx aor 1st sg">nam<b>a</b><br>nam<b>aṃ</b><br><span class="gray">nam<b>itthaṃ</b></span></td><td title="reflx aor 1st pl"><span class="gray">nam<b>imhase</b></span><br><span class="gray">nam<b>imhe</b></span></td></tr></tbody></table>
        
        <p>
            Inflections not found in the Chaṭṭha Saṅgāyana corpus, or within processed sandhi compounds are <span class="gray">grayed out</span>. They might still occur elsewhere, within compounds or in other versions
            of the Pāḷi texts.
        </p>
        <p class="footer">
            
            Did you spot a mistake in the conjugation table?
            Something missing?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSdAL2PzavyrtXgGmtNrZAMyh3hV6g3fU0chxhWFxunQEZtH0g/viewform?usp=pp_url&amp;entry.1932605469=nami%202&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here.</a>
        </p>
    </div>
    


    <!-- root family -->


    
    <div id="family_root_nami_2" class="dpd content hidden">
        <p class="heading underlined"><b>27</b> words belong to the root family <b>√nam</b> (bend)</p><table class="family"><tbody><tr><th>anata ¹</th><td><b>pp</b></td><td>unbent; without inclination; epithet of Nibbāna</td><td><span class="gray">✔</span></td></tr><tr><th>anata ²</th><td><b>pp</b></td><td>free from sham; lit. not bent</td><td><span class="gray">✘</span></td></tr><tr><th>anati ²·¹</th><td><b>fem</b></td><td>non-inclination</td><td><span class="gray">✘</span></td></tr><tr><th>anamanta</th><td><b>prp</b></td><td>not bending</td><td><span class="gray">◑</span></td></tr><tr><th>anāmetvā</th><td><b>abs</b></td><td>having not bent; lit. having not caused to bend</td><td><span class="gray">✔</span></td></tr><tr><th>nata ¹</th><td><b>pp</b></td><td>bent, stooped, inclined</td><td><span class="gray">✘</span></td></tr><tr><th>nata ²</th><td><b>pp</b></td><td>bowed; bent in homage; turned towards; (comm) inclined; lit. bent</td><td><span class="gray">✔</span></td></tr><tr><th>nati</th><td><b>fem</b></td><td>inclination; tendency; bent; bias; lit. bend</td><td><span class="gray">✔</span></td></tr><tr><th>namati ¹</th><td><b>pr</b></td><td>bends (towards); inclines (to); veers (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>namati ²</th><td><b>pr</b></td><td>bows down; pays respect; worships (someone with)</td><td><span class="gray">✔</span></td></tr><tr><th>namana</th><td><b>nt</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namanta</th><td><b>prp</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namayati</th><td><b>pr</b></td><td>makes straight; bends straight; lit. causes to bend</td><td><span class="gray">✔</span></td></tr><tr><th>namas</th><td><b>masc</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nami ¹</th><td><b>aor</b></td><td>bent (towards); inclined (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>nami ²</th><td><b>aor</b></td><td>bent, bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitabba</th><td><b>ptp</b></td><td>should be bent, should be bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitvā</th><td><b>abs</b></td><td>having bent, having bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>nameti</th><td><b>pr</b></td><td>bends; straightens</td><td><span class="gray">✘</span></td></tr><tr><th>namenta</th><td><b>prp</b></td><td>bending; straightening</td><td><span class="gray">✘</span></td></tr><tr><th>namo</th><td><b>ind</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nāmana</th><td><b>nt</b></td><td>bending; lit. causing to bend</td><td><span class="gray">◑</span></td></tr><tr><th>nāmita</th><td><b>pp</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmitvā</th><td><b>abs</b></td><td>having bent; having wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmeti</th><td><b>pr</b></td><td>bends, wields</td><td><span class="gray">✘</span></td></tr><tr><th>nāmetvā</th><td><b>abs</b></td><td>having caused to bend; having bent someone over</td><td><span class="gray">✔</span></td></tr><tr><th>nāmesi</th><td><b>aor</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr></tbody></table>
        <p class="footer">
            Something out of place?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%202&amp;entry.326955045=Root+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here</a>.
        </p>
    </div>
    

    <!-- word family -->

    

    <!-- compound family -->

    

    <!-- compound families -->

    

    <!-- idioms -->

    


    <!-- set -->

    

    <!-- sets -->

    

    

    <!-- frequency -->

    
    <div id="frequency_nami_2" class="dpd content hidden">

        
        <p class="heading underlined">

            
            Frequency of <b>nami 2</b> and its conjugations
            

            </p><table class="freq">
<thead>
<tr>
<th></th>
<th></th>
<th colspan="3" title="Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)">
<b>
CST
</b>
</th>
<th></th>
<th colspan="2" title="Buddha Jayanti Tipiṭaka (Sri Lanka)">
<b>
BJT
</b>
</th>
<th></th>
<th colspan="2" title="Syāmaraṭṭha 1927 Royal Edition (Thailand)">
<b>
SYA
</b>
</th>
<th></th>
<th colspan="1" title="Mahāsaṅgīti Tipiṭaka (Sutta Central)">
<b>
MST
</b>
</th>
</tr>
<tr style="text-align: right;">
<th></th>
<th></th>
<!-- CST -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th title="ṭīkā">Ṭ</th>
<th></th>
<!-- BJT -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SYA -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SC -->
<th title="mūla">M</th>
</tr>
</thead>
<tbody>
<tr>
<th class="vertical-text" rowspan="6">Vinaya</th>
</tr>
<tr>
<th>Pārājika</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gr9" rowspan="5">78</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">6</td>
<td class="gr1" rowspan="5">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Pācittiya</th>
<!-- CST -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">4</td>
</tr>
<tr>
<th>Mahāvagga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Cūḷavagga</th>
<!-- CST -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">4</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">3</td>
</tr>
<tr>
<th>Parivāra</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Sutta</th>
</tr>
<tr>
<th>Dīgha</th>
<!-- CST -->
<td class="gr2">23</td>
<td class="gr2">16</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr3">24</td>
<td class="gr1">15</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">17</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">21</td>
</tr>
<tr>
<th>Majjhima</th>
<!-- CST -->
<td class="gr2">17</td>
<td class="gr2">17</td>
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">15</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr2">17</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Saṃyutta</th>
<!-- CST -->
<td class="gr1">15</td>
<td class="gr2">16</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">16</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">14</td>
<td class="gr2">16</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Aṅguttara</th>
<!-- CST -->
<td class="gr3">25</td>
<td class="gr2">22</td>
<td class="gr1">14</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">22</td>
<td class="gr2">21</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr3">25</td>
<td class="gr1">14</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">14</td>
</tr>
<tr>
<th>Khuddaka 1</th>
<!-- CST -->
<td class="gr2">20</td>
<td class="gr8">71</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">18</td>
<td class="gr8">68</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">9</td>
<td class="gr9">72</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">16</td>
</tr>
<tr>
<th>Khuddaka 2</th>
<!-- CST -->
<td class="gr8">67</td>
<td class="gr9">73</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr8">67</td>
<td class="gr9">72</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr9">76</td>
<td class="gr7">63</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr8">66</td>
</tr>
<tr>
<th>Khuddaka 3</th>
<!-- CST -->
<td class="gr2">18</td>
<td class="gr1">7</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">12</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">18</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Abhidhamma</th>
</tr>
<tr>
<th>Dhammasaṅgaṇī</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gr2" rowspan="7">21</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Vibhaṅga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Dhātukathā</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Puggalapaññatti</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<!-- included in dhātukathā-->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Kathāvatthu</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Yamaka</th>
<!-- CST -->
<td class="gr1">10</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Paṭṭhāna</th>
<!-- CST -->
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr3">25</td>
</tr>
<tr>
<th class="vertical-text" rowspan="10">Aññā</th>
</tr>
<tr>
<th>Visuddhimagga</th>
<!-- CST -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- BJT -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="void"></td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="void"></td>
</tr>
<tr>
<th>Leḍī Sayāḍo</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">17</td>
</tr>
<tr>
<th>Buddhavandanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr4">34</td>
</tr>
<tr>
<th>Vaṃsa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">3</td>
</tr>
<tr>
<th>Byākaraṇa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr10">84</td>
</tr>
<tr>
<th>Pucchavissajjanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">7</td>
</tr>
<tr>
<th>Nīti</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">14</td>
</tr>
<tr>
<th>Pakiṇṇaka</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">16</td>
</tr>
<tr>
<th>Sihaḷa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">17</td>
</tr>
</tbody>
</table>
<p>
<b>CST</b>: Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)
</p>
<p>
<b>BJT</b>: Buddha Jayanti Tipiṭaka (Sri Lanka)
</p>
<p>
<b>SYA</b>: Syāmaraṭṭha 1927 Royal Edition (Thailand)
</p>
<p>
<b>MST</b>: Mahāsaṅgīti Tipiṭaka (Sutta Central)
</p>

            


        <p>
            For a detailed explanation of how this word frequency chart is calculated, it's accuracies and inaccuracies,
            please refer to
            <a class="link" href="https://digitalpalidictionary.github.io/features/frequency/" target="_blank">
                this webpage
            </a>.
        </p>
        <p class="footer">
            If something looks out of place,
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%202&amp;entry.326955045=Frequency&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                log it here.
            </a>
        </p>
    </div>
    

    <!-- feedback -->

    <div id="feedback_nami_2" class="dpd content hidden">
        <p>
            ID <b>35796</b>
        </p>
        <p>
            Digital Pāḷi Dictionary is a work in progress, made available for testing and feedback purposes.
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">Add a missing word</a><span>. Please use this </span>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                online form</a>
            to add missing words, especially from Vinaya, commentaries, and other later texts.
            If you prefer to work offline, here is a
            <a class="link" download="true" href="https://github.com/digitalpalidictionary/dpd-db/raw/main/misc/DPD%20Add%20Words.xlsx" target="_blank">
                spreadsheet to download</a><span>, fill in and submit. </span>
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=nami%202&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Correct a mistake
            </a>
            <span>
                . Did you spot a mistake in the dictionary? Have something to add? Please report it. It generally takes
                less than a minute and your corrections and suggestions help to improve the quality of this dictionary
                for everyone who uses it.
            </span>
        </p>
        <p>
            <a class="link" href="https://digitalpalidictionary.github.io/" target="_blank">
                Read the docs
            </a>
            <span>
                . Get more detailed information about installation on your devices, upgrades, advanced settings and
                features.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=I%20want%20to%20help!&amp;body=Please%20let%20me%20know%20how%20I%20can%20get%20involved%20with%20the%20development%20of%20DPD.">
                Get involved
            </a>
            <span>
                . If you're a Pāḷi specialist or a coder, or would like to contribute to the project in any way, please
                get in touch.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=Keep%20me%20updated!&amp;body=Please%20let%20me%20know%20about%20new%20features%20and%20updates%20as%20soon%20as%20they%20are%20available.">
                Join the mailing list
            </a>
            <span>
                . Get notified of updates and new features as soon as they become available.
            </span>
        </p>
    </div>

    <!-- fin --><!-- summary -->

<h3 id="namo">namo</h3>
<div class="dpd summary">
    <p>
        

        ind.
        
        (+dat)
        
        <b>reverence (to); veneration (to); homage (to)</b>; lit. bow
        
        [√nam + as + o]
        
        
        <span class="gray">✔</span>
        
    </p>
</div>


<!-- button box -->


<div class="button-box">
    
    <a class="button" name="grammar-button" href="#" data-target="grammar_namo">
        grammar</a>
    

    

    
    <a class="button" name="example-button" href="#" data-target="examples_namo">
        examples</a>
    

    

    

    

    
    <a class="button" href="#" data-target="family_root_namo">
        root family</a>
    

    

    
    <a class="button" href="#" data-target="family_compound_namo">
        compound family</a>
    

    

    
    <a class="button" href="#" data-target="family_idiom_namo">
        idioms</a>
    

    

    

    
    <a class="button" href="#" data-target="frequency_namo">
        frequency</a>
    

    <a class="button" href="#" data-target="feedback_namo">
        feedback</a>
</div>


<!-- grammar -->



<div id="grammar_namo" name="grammar-div" class="dpd content hidden">
    <table class="grammar">
        <tbody><tr>
            <th>
                Pāḷi
            </th>
            <td>
                namo
            </td>
        </tr>
        <tr>
            <th>
                IPA
            </th>
            <td>
                /nɐmoː/
            </td>
        </tr>

        

        <tr>
            <th>
                Grammar
            </th>
            <td>
                ind, excl, nom sg of namas (+dat)
            </td>
        </tr>

        
        <tr>
            <th>
                Root Family
            </th>
            <td>
                √nam
            </td>
        </tr>
        

        
        <tr>
            <th>
                Root
            </th>
            <td>
                √nam<sup>･</sup>1
                a
                (bend)
            </td>
        </tr>
        

        

        

        
        <tr>
            <th>
                Construction
            </th>
            <td>
                √nam + as + o<br>namas + o
            </td>
        </tr>
        

        

        

        

        

        

        

        
        <tr>
            <th>
                Commentary
            </th>
            <td>
                (SNPa) <b>namo te</b>'ti añjaliṃ paggahetvā āha.
            </td>
        </tr>
        

        

        

        

        

        

        
        <tr>
            <th>
                Sanskrit
            </th>
            <td>
                <i>
                    namas [nam]
                </i>

            </td>
        </tr>
        

        
        <tr>
            <th>
                Sanskrit Root
            </th>
            <td>
                <i>
                    √nam
                    1
                    (bend, bow)
                </i>
            </td>
        </tr>
        
    </tbody></table>
    <p class="footer">
        Did you spot a mistake?
        <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Grammar&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
            Correct it here.</a>
    </p>
</div>


<!-- examples -->


    <div id="examples_namo" name="example-div" class="dpd content hidden">
        

        
        <p>
            <b>namo</b> tassa bhagavato arahato sammāsambuddhassa
        </p>
        <p class="sutta">
            
            <a class="sutta_link" href="https://www.thebuddhaswords.net/dn/dn21.html" target="_blank">
                DN21.8</a>
            
            sakkapañhasuttaṃ
        </p>

        
        <p>
            <b>namo</b> te puris'ājañña,<br><b>namo</b> te puris'uttama,<br>sadevakasmiṃ lokasmiṃ,<br>n'atthi te paṭipuggalo.
        </p>
        <p class="sutta">
            
            <a class="sutta_link" href="https://www.thebuddhaswords.net/snp/snp3.6.html" target="_blank">
                SNP32</a>
            
            sabhiyasuttaṃ
        </p>
        

        <p class="footer">
            Can you think of a better example?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Examples&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Add it here.</a>
        </p>

    </div>
    

    <!-- sbs examples -->

    


    <!-- declension -->

    


    <!-- conjugation -->


    


    <!-- root family -->


    
    <div id="family_root_namo" class="dpd content hidden">
        <p class="heading underlined"><b>27</b> words belong to the root family <b>√nam</b> (bend)</p><table class="family"><tbody><tr><th>anata ¹</th><td><b>pp</b></td><td>unbent; without inclination; epithet of Nibbāna</td><td><span class="gray">✔</span></td></tr><tr><th>anata ²</th><td><b>pp</b></td><td>free from sham; lit. not bent</td><td><span class="gray">✘</span></td></tr><tr><th>anati ²·¹</th><td><b>fem</b></td><td>non-inclination</td><td><span class="gray">✘</span></td></tr><tr><th>anamanta</th><td><b>prp</b></td><td>not bending</td><td><span class="gray">◑</span></td></tr><tr><th>anāmetvā</th><td><b>abs</b></td><td>having not bent; lit. having not caused to bend</td><td><span class="gray">✔</span></td></tr><tr><th>nata ¹</th><td><b>pp</b></td><td>bent, stooped, inclined</td><td><span class="gray">✘</span></td></tr><tr><th>nata ²</th><td><b>pp</b></td><td>bowed; bent in homage; turned towards; (comm) inclined; lit. bent</td><td><span class="gray">✔</span></td></tr><tr><th>nati</th><td><b>fem</b></td><td>inclination; tendency; bent; bias; lit. bend</td><td><span class="gray">✔</span></td></tr><tr><th>namati ¹</th><td><b>pr</b></td><td>bends (towards); inclines (to); veers (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>namati ²</th><td><b>pr</b></td><td>bows down; pays respect; worships (someone with)</td><td><span class="gray">✔</span></td></tr><tr><th>namana</th><td><b>nt</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namanta</th><td><b>prp</b></td><td>bending, bowing down</td><td><span class="gray">✘</span></td></tr><tr><th>namayati</th><td><b>pr</b></td><td>makes straight; bends straight; lit. causes to bend</td><td><span class="gray">✔</span></td></tr><tr><th>namas</th><td><b>masc</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nami ¹</th><td><b>aor</b></td><td>bent (towards); inclined (towards)</td><td><span class="gray">✔</span></td></tr><tr><th>nami ²</th><td><b>aor</b></td><td>bent, bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitabba</th><td><b>ptp</b></td><td>should be bent, should be bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>namitvā</th><td><b>abs</b></td><td>having bent, having bowed down</td><td><span class="gray">✘</span></td></tr><tr><th>nameti</th><td><b>pr</b></td><td>bends; straightens</td><td><span class="gray">✘</span></td></tr><tr><th>namenta</th><td><b>prp</b></td><td>bending; straightening</td><td><span class="gray">✘</span></td></tr><tr><th>namo</th><td><b>ind</b></td><td>reverence (to); veneration (to); homage (to); lit. bow</td><td><span class="gray">✔</span></td></tr><tr><th>nāmana</th><td><b>nt</b></td><td>bending; lit. causing to bend</td><td><span class="gray">◑</span></td></tr><tr><th>nāmita</th><td><b>pp</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmitvā</th><td><b>abs</b></td><td>having bent; having wielded</td><td><span class="gray">✘</span></td></tr><tr><th>nāmeti</th><td><b>pr</b></td><td>bends, wields</td><td><span class="gray">✘</span></td></tr><tr><th>nāmetvā</th><td><b>abs</b></td><td>having caused to bend; having bent someone over</td><td><span class="gray">✔</span></td></tr><tr><th>nāmesi</th><td><b>aor</b></td><td>bent, wielded</td><td><span class="gray">✘</span></td></tr></tbody></table>
        <p class="footer">
            Something out of place?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Root+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Report it here</a>.
        </p>
    </div>
    

    <!-- word family -->

    

    <!-- compound family -->

    
    <div id="family_compound_namo" class="dpd content hidden">
        <p class="heading underlined">
            <b>
                1
            </b>
            compounds which contains
            <b>
                namas
            </b>
            </p><table class="family"><tbody><tr><th>namakāra</th><td><b>masc</b></td><td>paying homage; act of veneration</td><td><span class="gray">◑</span></td></tr></tbody></table>
        <p></p>
        <p class="footer">
            Spot a mistake?
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Compound+Family&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Fix it here</a>.
        </p>
    </div>
    

    <!-- compound families -->

    

    <!-- idioms -->

    
    <div id="family_idiom_namo" class="dpd content hidden">
        
        
        <p class="heading underlined">
            
            
            <b>3</b>
            idiomatic expressions which contain
            <b>namas</b>
            
        </p>
        <table class="family"><tbody><tr><th>namatthu</th><td><b>sandhi</b></td><td>homage (to); salutation (to); lit. may there be homage</td><td><span class="gray">✔</span></td></tr><tr><th>namo karoti</th><td><b>idiom</b></td><td>pays respect (to); venerates; lit. makes a bow</td><td><span class="gray">✔</span></td></tr><tr><th>namo te</th><td><b>idiom</b></td><td>homage to you; honour to you</td><td><span class="gray">✔</span></td></tr></tbody></table>
        
        <p class="footer">
            Please add more idioms
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Idioms&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                here</a>.
        </p>
    </div>
    


    <!-- set -->

    

    <!-- sets -->

    

    

    <!-- frequency -->

    
    <div id="frequency_namo" class="dpd content hidden">

        
        <p class="heading underlined">

            
            Frequency of <b>namo</b>
            

            </p><table class="freq">
<thead>
<tr>
<th></th>
<th></th>
<th colspan="3" title="Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)">
<b>
CST
</b>
</th>
<th></th>
<th colspan="2" title="Buddha Jayanti Tipiṭaka (Sri Lanka)">
<b>
BJT
</b>
</th>
<th></th>
<th colspan="2" title="Syāmaraṭṭha 1927 Royal Edition (Thailand)">
<b>
SYA
</b>
</th>
<th></th>
<th colspan="1" title="Mahāsaṅgīti Tipiṭaka (Sutta Central)">
<b>
MST
</b>
</th>
</tr>
<tr style="text-align: right;">
<th></th>
<th></th>
<!-- CST -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th title="ṭīkā">Ṭ</th>
<th></th>
<!-- BJT -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SYA -->
<th title="mūla">M</th>
<th title="aṭṭhakathā">A</th>
<th></th>
<!-- SC -->
<th title="mūla">M</th>
</tr>
</thead>
<tbody>
<tr>
<th class="vertical-text" rowspan="6">Vinaya</th>
</tr>
<tr>
<th>Pārājika</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gr9" rowspan="5">70</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">6</td>
<td class="gr1" rowspan="5">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Pācittiya</th>
<!-- CST -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">4</td>
</tr>
<tr>
<th>Mahāvagga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Cūḷavagga</th>
<!-- CST -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">4</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">3</td>
</tr>
<tr>
<th>Parivāra</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Sutta</th>
</tr>
<tr>
<th>Dīgha</th>
<!-- CST -->
<td class="gr2">20</td>
<td class="gr1">10</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr3">22</td>
<td class="gr1">9</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">14</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">19</td>
</tr>
<tr>
<th>Majjhima</th>
<!-- CST -->
<td class="gr2">17</td>
<td class="gr1">11</td>
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">15</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">14</td>
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">14</td>
</tr>
<tr>
<th>Saṃyutta</th>
<!-- CST -->
<td class="gr2">15</td>
<td class="gr1">10</td>
<td class="gr1">7</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">16</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr2">14</td>
<td class="gr1">10</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Aṅguttara</th>
<!-- CST -->
<td class="gr3">25</td>
<td class="gr2">20</td>
<td class="gr1">13</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr3">21</td>
<td class="gr2">19</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr3">25</td>
<td class="gr1">12</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">14</td>
</tr>
<tr>
<th>Khuddaka 1</th>
<!-- CST -->
<td class="gr2">20</td>
<td class="gr9">66</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr2">17</td>
<td class="gr9">63</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">9</td>
<td class="gr9">68</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr2">16</td>
</tr>
<tr>
<th>Khuddaka 2</th>
<!-- CST -->
<td class="gr9">67</td>
<td class="gr9">66</td>
<td class="void"></td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr9">65</td>
<td class="gr9">65</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr10">76</td>
<td class="gr8">57</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr9">66</td>
</tr>
<tr>
<th>Khuddaka 3</th>
<!-- CST -->
<td class="gr1">11</td>
<td class="gr1">7</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">11</td>
<td class="gr1">6</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">3</td>
<td class="gr1">4</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">11</td>
</tr>
<tr>
<th class="vertical-text" rowspan="8">Abhidhamma</th>
</tr>
<tr>
<th>Dhammasaṅgaṇī</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gr2" rowspan="7">20</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gr1" rowspan="7">9</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Vibhaṅga</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Dhātukathā</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1" rowspan="2">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Puggalapaññatti</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">1</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<!-- included in dhātukathā-->
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Kathāvatthu</th>
<!-- CST -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">1</td>
</tr>
<tr>
<th>Yamaka</th>
<!-- CST -->
<td class="gr1">10</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr1">10</td>
</tr>
<tr>
<th>Paṭṭhāna</th>
<!-- CST -->
<td class="gr1">5</td>
<td class="gap"></td>
<!-- BJT -->
<td class="gr1">3</td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SYA -->
<td class="gr1">11</td>
<td class="gap"></td>
<!-- SC -->
<td class="gr3">25</td>
</tr>
<tr>
<th class="vertical-text" rowspan="10">Aññā</th>
</tr>
<tr>
<th>Visuddhimagga</th>
<!-- CST -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gr1">3</td>
<td class="gap"></td>
<!-- BJT -->
<td class="void"></td>
<td class="gr1">2</td>
<td class="gap"></td>
<!-- SYA -->
<td class="void"></td>
<td class="gr1">1</td>
<td class="gap"></td>
<!-- SC -->
<td class="void"></td>
</tr>
<tr>
<th>Leḍī Sayāḍo</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">16</td>
</tr>
<tr>
<th>Buddhavandanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr3">23</td>
</tr>
<tr>
<th>Vaṃsa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">3</td>
</tr>
<tr>
<th>Byākaraṇa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr9">74</td>
</tr>
<tr>
<th>Pucchavissajjanā</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">7</td>
</tr>
<tr>
<th>Nīti</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">14</td>
</tr>
<tr>
<th>Pakiṇṇaka</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr2">16</td>
</tr>
<tr>
<th>Sihaḷa</th>
<td class="void"></td>
<td class="void"></td>
<td class="gr1">13</td>
</tr>
</tbody>
</table>
<p>
<b>CST</b>: Chaṭṭha Saṅgāyana Tipiṭaka (Myanmar)
</p>
<p>
<b>BJT</b>: Buddha Jayanti Tipiṭaka (Sri Lanka)
</p>
<p>
<b>SYA</b>: Syāmaraṭṭha 1927 Royal Edition (Thailand)
</p>
<p>
<b>MST</b>: Mahāsaṅgīti Tipiṭaka (Sutta Central)
</p>

            


        <p>
            For a detailed explanation of how this word frequency chart is calculated, it's accuracies and inaccuracies,
            please refer to
            <a class="link" href="https://digitalpalidictionary.github.io/features/frequency/" target="_blank">
                this webpage
            </a>.
        </p>
        <p class="footer">
            If something looks out of place,
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.326955045=Frequency&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                log it here.
            </a>
        </p>
    </div>
    

    <!-- feedback -->

    <div id="feedback_namo" class="dpd content hidden">
        <p>
            ID <b>35805</b>
        </p>
        <p>
            Digital Pāḷi Dictionary is a work in progress, made available for testing and feedback purposes.
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">Add a missing word</a><span>. Please use this </span>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSfResxEUiRCyFITWPkzoQ2HhHEvUS5fyg68Rl28hFH6vhHlaA/viewform?usp=pp_url&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                online form</a>
            to add missing words, especially from Vinaya, commentaries, and other later texts.
            If you prefer to work offline, here is a
            <a class="link" download="true" href="https://github.com/digitalpalidictionary/dpd-db/raw/main/misc/DPD%20Add%20Words.xlsx" target="_blank">
                spreadsheet to download</a><span>, fill in and submit. </span>
        </p>
        <p>
            <a class="link" href="https://docs.google.com/forms/d/e/1FAIpQLSf9boBe7k5tCwq7LdWgBHHGIPVc4ROO5yjVDo1X5LDAxkmGWQ/viewform?usp=pp_url&amp;entry.438735500=namo&amp;entry.1433863141=dpdict.net+2025-05-08" target="_blank">
                Correct a mistake
            </a>
            <span>
                . Did you spot a mistake in the dictionary? Have something to add? Please report it. It generally takes
                less than a minute and your corrections and suggestions help to improve the quality of this dictionary
                for everyone who uses it.
            </span>
        </p>
        <p>
            <a class="link" href="https://digitalpalidictionary.github.io/" target="_blank">
                Read the docs
            </a>
            <span>
                . Get more detailed information about installation on your devices, upgrades, advanced settings and
                features.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=I%20want%20to%20help!&amp;body=Please%20let%20me%20know%20how%20I%20can%20get%20involved%20with%20the%20development%20of%20DPD.">
                Get involved
            </a>
            <span>
                . If you're a Pāḷi specialist or a coder, or would like to contribute to the project in any way, please
                get in touch.
            </span>
        </p>
        <p>
            <a class="link" href="mailto:digitalpalidictionary@gmail.com?subject=Keep%20me%20updated!&amp;body=Please%20let%20me%20know%20about%20new%20features%20and%20updates%20as%20soon%20as%20they%20are%20available.">
                Join the mailing list
            </a>
            <span>
                . Get notified of updates and new features as soon as they become available.
            </span>
        </p>
    </div>

    <!-- fin --><h3>grammar: namo</h3>
<div class="dpd">
    <table class="grammar_dict">
        <thead>
            <tr>
                <th id="col1">pos</th>
                <th id="col2">grammar</th>
                <th id="col3"></th>
                <th id="col4">word</th>
            </tr>
        </thead>
        <tbody>
            
            
            
            <tr>
                <td>
                    noun
                </td>
                <td>
                    masc nom sg
                </td>
                <td>
                    of
                </td>
                <td>
                    namas
                </td>
            </tr>
            
            
            
            
            <tr>
                <td>
                    noun
                </td>
                <td>
                    masc acc sg
                </td>
                <td>
                    of
                </td>
                <td>
                    namas
                </td>
            </tr>
            
            
            
            
            <tr>
                <td>
                    verb
                </td>
                <td>
                    aor 2nd sg
                </td>
                <td>
                    of
                </td>
                <td>
                    nami
                </td>
            </tr>
            
            
        
        </tbody>
    </table>
    <p class="footer">
            For more information, please <a class="link" href="https://digitalpalidictionary.github.io/features/grammardict/" target="_blank">read the docs</a>.
        </p>
    <p></p>
</div>
    </div>
    

</body></html>`);
// fetch("https://dpd-proxy.snyatix.my.id/gd?search=namo")
//   .then((response) => response.text())
//   .then((res) => {
//     panel.setContent(res);
//     console.debug(res);
//   });
