import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Use of Text Utiliser
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This Text util is a text analyzer.</strong> This text analyzer process the copied text or human-written text and analyse the text and gives the flexibility to copy the text to the clipboard and also convert all the lower case letters to uppercase. Text analzer software also keeps the count of number of words, letters and new line given as the user input.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           Technology used
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>React.</strong>This text analyzer is purely built using React.js and works on all the platforms. This is the version 1.0 of the analyzer, update of this version will be made available soon till the enjoy this product and suggest for the updates you need.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Contact
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            You can suggest the required update to <strong>shubhamarora2307@gmail.com</strong> or you can post your concerns to SJBIT boys hostel block2, BGS health and education city, Bengaluru, Karnataka 560060<strong>-by shubham Arora</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
