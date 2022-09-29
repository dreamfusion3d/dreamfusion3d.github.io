'use strict';

(function() {
    // Format video selector for compositional prompts.
    let captions = ["a DSLR photo of a squirrel  chopping vegetables",
"a DSLR photo of a squirrel  dancing",
"a DSLR photo of a squirrel  eating a hamburger",
"a DSLR photo of a squirrel  playing the saxophone",
"a DSLR photo of a squirrel  reading a book",
"a DSLR photo of a squirrel  ",
"a DSLR photo of a squirrel  riding a motorcycle",
"a DSLR photo of a squirrel  riding a skateboard",
"a DSLR photo of a squirrel  sitting at a pottery wheel shaping a clay bowl",
"a DSLR photo of a squirrel wearing a kimono chopping vegetables",
"a DSLR photo of a squirrel wearing a kimono dancing",
"a DSLR photo of a squirrel wearing a kimono eating a hamburger",
"a DSLR photo of a squirrel wearing a kimono playing the saxophone",
"a DSLR photo of a squirrel wearing a kimono reading a book",
"a DSLR photo of a squirrel wearing a kimono ",
"a DSLR photo of a squirrel wearing a kimono riding a motorcycle",
"a DSLR photo of a squirrel wearing a kimono riding a skateboard",
"a DSLR photo of a squirrel wearing a kimono sitting at a pottery wheel shaping a clay bowl",
"a DSLR photo of a squirrel wearing a kimono wielding a katana",
"a DSLR photo of a squirrel wearing a medieval suit of armor chopping vegetables",
"a DSLR photo of a squirrel wearing a medieval suit of armor dancing",
"a DSLR photo of a squirrel wearing a medieval suit of armor eating a hamburger",
"a DSLR photo of a squirrel wearing a medieval suit of armor playing the saxophone",
"a DSLR photo of a squirrel wearing a medieval suit of armor reading a book",
"a DSLR photo of a squirrel wearing a medieval suit of armor ",
"a DSLR photo of a squirrel wearing a medieval suit of armor riding a motorcycle",
"a DSLR photo of a squirrel wearing a medieval suit of armor riding a skateboard",
"a DSLR photo of a squirrel wearing a medieval suit of armor sitting at a pottery wheel shaping a clay bowl",
"a DSLR photo of a squirrel wearing a medieval suit of armor wielding a katana",
"a DSLR photo of a squirrel wearing an elegant ballgown chopping vegetables",
"a DSLR photo of a squirrel wearing an elegant ballgown dancing",
"a DSLR photo of a squirrel wearing an elegant ballgown eating a hamburger",
"a DSLR photo of a squirrel wearing an elegant ballgown playing the saxophone",
"a DSLR photo of a squirrel wearing an elegant ballgown reading a book",
"a DSLR photo of a squirrel wearing an elegant ballgown ",
"a DSLR photo of a squirrel wearing an elegant ballgown riding a motorcycle",
"a DSLR photo of a squirrel wearing an elegant ballgown riding a skateboard",
"a DSLR photo of a squirrel wearing an elegant ballgown sitting at a pottery wheel shaping a clay bowl",
"a DSLR photo of a squirrel wearing an elegant ballgown wielding a katana",
"a DSLR photo of a squirrel wearing a purple hoodie chopping vegetables",
"a DSLR photo of a squirrel wearing a purple hoodie dancing",
"a DSLR photo of a squirrel wearing a purple hoodie eating a hamburger",
"a DSLR photo of a squirrel wearing a purple hoodie playing the saxophone",
"a DSLR photo of a squirrel wearing a purple hoodie reading a book",
"a DSLR photo of a squirrel wearing a purple hoodie ",
"a DSLR photo of a squirrel wearing a purple hoodie riding a motorcycle",
"a DSLR photo of a squirrel wearing a purple hoodie riding a skateboard",
"a DSLR photo of a squirrel wearing a purple hoodie sitting at a pottery wheel shaping a clay bowl",
"a DSLR photo of a squirrel wearing a purple hoodie wielding a katana",
"a DSLR photo of a squirrel  wielding a katana",
"a highly detailed metal sculpture of a squirrel  chopping vegetables",
"a highly detailed metal sculpture of a squirrel  dancing",
"a highly detailed metal sculpture of a squirrel  eating a hamburger",
"a highly detailed metal sculpture of a squirrel  playing the saxophone",
"a highly detailed metal sculpture of a squirrel  reading a book",
"a highly detailed metal sculpture of a squirrel  ",
"a highly detailed metal sculpture of a squirrel  riding a motorcycle",
"a highly detailed metal sculpture of a squirrel  riding a skateboard",
"a highly detailed metal sculpture of a squirrel  sitting at a pottery wheel shaping a clay bowl",
"a highly detailed metal sculpture of a squirrel wearing a kimono chopping vegetables",
"a highly detailed metal sculpture of a squirrel wearing a kimono dancing",
"a highly detailed metal sculpture of a squirrel wearing a kimono eating a hamburger",
"a highly detailed metal sculpture of a squirrel wearing a kimono playing the saxophone",
"a highly detailed metal sculpture of a squirrel wearing a kimono reading a book",
"a highly detailed metal sculpture of a squirrel wearing a kimono ",
"a highly detailed metal sculpture of a squirrel wearing a kimono riding a motorcycle",
"a highly detailed metal sculpture of a squirrel wearing a kimono riding a skateboard",
"a highly detailed metal sculpture of a squirrel wearing a kimono sitting at a pottery wheel shaping a clay bowl",
"a highly detailed metal sculpture of a squirrel wearing a kimono wielding a katana",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor chopping vegetables",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor dancing",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor eating a hamburger",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor playing the saxophone",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor reading a book",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor ",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor riding a motorcycle",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor riding a skateboard",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor sitting at a pottery wheel shaping a clay bowl",
"a highly detailed metal sculpture of a squirrel wearing a medieval suit of armor wielding a katana",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown chopping vegetables",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown dancing",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown eating a hamburger",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown playing the saxophone",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown reading a book",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown ",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown riding a motorcycle",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown riding a skateboard",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown sitting at a pottery wheel shaping a clay bowl",
"a highly detailed metal sculpture of a squirrel wearing an elegant ballgown wielding a katana",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie chopping vegetables",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie dancing",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie eating a hamburger",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie playing the saxophone",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie reading a book",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie ",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie riding a motorcycle",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie riding a skateboard",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie sitting at a pottery wheel shaping a clay bowl",
"a highly detailed metal sculpture of a squirrel wearing a purple hoodie wielding a katana",
"a highly detailed metal sculpture of a squirrel  wielding a katana",
"an intricate wooden carving of a squirrel  chopping vegetables",
"an intricate wooden carving of a squirrel  dancing",
"an intricate wooden carving of a squirrel  eating a hamburger",
"an intricate wooden carving of a squirrel  playing the saxophone",
"an intricate wooden carving of a squirrel  reading a book",
"an intricate wooden carving of a squirrel  ",
"an intricate wooden carving of a squirrel  riding a motorcycle",
"an intricate wooden carving of a squirrel  riding a skateboard",
"an intricate wooden carving of a squirrel  sitting at a pottery wheel shaping a clay bowl",
"an intricate wooden carving of a squirrel wearing a kimono chopping vegetables",
"an intricate wooden carving of a squirrel wearing a kimono dancing",
"an intricate wooden carving of a squirrel wearing a kimono eating a hamburger",
"an intricate wooden carving of a squirrel wearing a kimono playing the saxophone",
"an intricate wooden carving of a squirrel wearing a kimono reading a book",
"an intricate wooden carving of a squirrel wearing a kimono ",
"an intricate wooden carving of a squirrel wearing a kimono riding a motorcycle",
"an intricate wooden carving of a squirrel wearing a kimono riding a skateboard",
"an intricate wooden carving of a squirrel wearing a kimono sitting at a pottery wheel shaping a clay bowl",
"an intricate wooden carving of a squirrel wearing a kimono wielding a katana",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor chopping vegetables",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor dancing",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor eating a hamburger",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor playing the saxophone",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor reading a book",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor ",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor riding a motorcycle",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor riding a skateboard",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor sitting at a pottery wheel shaping a clay bowl",
"an intricate wooden carving of a squirrel wearing a medieval suit of armor wielding a katana",
"an intricate wooden carving of a squirrel wearing an elegant ballgown chopping vegetables",
"an intricate wooden carving of a squirrel wearing an elegant ballgown dancing",
"an intricate wooden carving of a squirrel wearing an elegant ballgown eating a hamburger",
"an intricate wooden carving of a squirrel wearing an elegant ballgown playing the saxophone",
"an intricate wooden carving of a squirrel wearing an elegant ballgown reading a book",
"an intricate wooden carving of a squirrel wearing an elegant ballgown ",
"an intricate wooden carving of a squirrel wearing an elegant ballgown riding a motorcycle",
"an intricate wooden carving of a squirrel wearing an elegant ballgown riding a skateboard",
"an intricate wooden carving of a squirrel wearing an elegant ballgown sitting at a pottery wheel shaping a clay bowl",
"an intricate wooden carving of a squirrel wearing an elegant ballgown wielding a katana",
"an intricate wooden carving of a squirrel wearing a purple hoodie chopping vegetables",
"an intricate wooden carving of a squirrel wearing a purple hoodie dancing",
"an intricate wooden carving of a squirrel wearing a purple hoodie eating a hamburger",
"an intricate wooden carving of a squirrel wearing a purple hoodie playing the saxophone",
"an intricate wooden carving of a squirrel wearing a purple hoodie reading a book",
"an intricate wooden carving of a squirrel wearing a purple hoodie ",
"an intricate wooden carving of a squirrel wearing a purple hoodie riding a motorcycle",
"an intricate wooden carving of a squirrel wearing a purple hoodie riding a skateboard",
"an intricate wooden carving of a squirrel wearing a purple hoodie sitting at a pottery wheel shaping a clay bowl",
"an intricate wooden carving of a squirrel wearing a purple hoodie wielding a katana",
"an intricate wooden carving of a squirrel  wielding a katana"];

    let imagen_pieces = [
        ["a DSLR photo of a squirrel", "an intricate wooden carving of a squirrel", "a highly detailed metal sculpture of a squirrel"],
        ["", "wearing a kimono", "wearing a medieval suit of armor", "wearing a purple hoodie", "wearing an elegant ballgown"],
        ["", "reading a book", "riding a motorcycle", "playing the saxophone", "chopping vegetables", "sitting at a pottery wheel shaping a clay bowl",
        "riding a skateboard", "wielding a katana", "eating a hamburger", "dancing"],
    ];

    const updateCompositionVideo = () => {
        let phrase = "";
        for (let depth = 1; depth <= imagen_pieces.length; depth++) {
            let tagContainer = document.getElementById('compositional_tags_depth_' + depth);
            let selected = tagContainer.querySelectorAll('.selected');

            // Make sure at most one item is selected at this level.
            if (selected.length > 1) {
                // Too many tags selected at this level. Shouldn't have happened, but unselect them.
                selected.slice(1, selected.length).forEach((chunk) => {
                    chunk.classList = "";
                });
            }

            // Make sure at least one item is selected at this level.
            if (selected.length == 0) {
                tagContainer.querySelector('span').classList = "selected";
                updateCompositionVideo();
                return;
            }

            let segment = selected[0].getAttribute("data-segment");
            phrase = phrase + segment;
        }

        if (captions.includes(phrase)) {
            let compositionalVideo = document.getElementById('compositionalVideo');
            let container = compositionalVideo.parentNode;
            let videoName = phrase.replaceAll(' ', '_') + '_rgbdn_hq_15000.mp4';
            let sourceURL = "https://pub-b1f092b6867f4495b8f149d222a3bffe.r2.dev/journey_sept28/cropped/full_continuous/" + videoName;
            console.log('phrase found: ', phrase, sourceURL);

            let width = compositionalVideo.offsetWidth;
            let height = compositionalVideo.offsetHeight;

            let oldSourceEl = document.getElementById('compositionalVideoSrc');
            oldSourceEl.src = sourceURL;

            container.style = "opacity: 0;";
            setTimeout(() => {
                container.style = "opacity: 1;";
                compositionalVideo.load();
            }, 750);

            let captionEl = document.getElementById('compositionalCaption');
            if (captionEl)
                captionEl.innerHTML = phrase;
        } else {
            console.log('phrase NOT found: ' + phrase);
        }
    };

    const deselect = (element) => {
        element.classList = ("" + element.classList).replace('selected', ' ');  // not clean, what about spaces?
    }

    const tagClicked = (event) => {
        event.target.parentNode.querySelectorAll('.selected').forEach(deselect);
        event.target.classList = "selected";
        updateCompositionVideo();
    };

    let phraseContainer = document.querySelector('.compositional .text');
    imagen_pieces.forEach((phrases, depth) => {
        depth = depth + 1;
        let tagContainer = document.createElement("P");
        tagContainer.classList = "selectable left";
        tagContainer.id = "compositional_tags_depth_" + depth;

        phrases.forEach((segment, i) => {
            if (depth > 1) {
                segment = " " + segment;
            }

            let tag = document.createElement("SPAN");
            let text = segment.trim();
            if (!text)
                text = '[...]';

            tag.appendChild(document.createTextNode(text));
            tag.setAttribute("data-segment", segment);
            tag.onclick = tagClicked;
            if (i == 0)
                tag.classList = "selected";

            tagContainer.appendChild(tag);
        });

        phraseContainer.appendChild(tagContainer);
    });

})();

(function() {
    // Create mesh holders.
    let sharedAttributes = {
        ar: true,
        "ar-modes": "webxr scene-viewer quick-look",
        loading: "lazy",
        reveal: "manual",
        // crossorigin: "anonymous",
        style: "height: 300px; width: 100%;",
        "camera-controls": true,
        "touch-action": "pan-y",
        "shadow-intensity": "1",
        exposure: "1"
    };

    let meshAttributes = {
        chick: {
            src: "https://dreamfusion3d.github.io/assets/meshes2/44855521_sept18_hero16_047a_DSLR_photo_of_an_eggshell_broken_in_two_with_an_adorable_chick_standing_next_to_it_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44855521_sept18_hero16_047a_DSLR_photo_of_an_eggshell_broken_in_two_with_an_adorable_chick_standing_next_to_it_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "a DSLR photo of an eggshell broken in two with an adorable chick standing next to it",
            shortCaption: "[...] eggshell broken in two with an adorable chick standing next to it"
        },
        pig: {
            src: "/assets/meshes2/44844973_sept18_hero14_076a_pig_wearing_a_backpack_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44844973_sept18_hero14_076a_pig_wearing_a_backpack_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "a pig wearing a backpack",
            shortCaption: "a pig wearing a backpack"
        },
        frog: {
            src: "/assets/meshes2/sweaterfrog_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/sweaterfrog_1step.jpg",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
            caption: "",
            shortCaption: "",
        },
        lemur: {
            src: "/assets/meshes2/44853505_sept18_hero15_124a_lemur_taking_notes_in_a_journal_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44853505_sept18_hero15_124a_lemur_taking_notes_in_a_journal_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
        },
        eagle: {
            src: "/assets/meshes2/44853505_sept18_hero15_145a_bald_eagle_carved_out_of_wood_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44853505_sept18_hero15_145a_bald_eagle_carved_out_of_wood_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
        },
    // {
    //     src: "/assets/meshes/44855521_sept18_hero16_047a_DSLR_photo_of_an_eggshell_broken_in_two_with_an_adorable_chick_standing_next_to_it_1step.glb",
    //     poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44855521_sept18_hero16_047a_DSLR_photo_of_an_eggshell_broken_in_two_with_an_adorable_chick_standing_next_to_it_1step.webp"
    // },
        crab: {
            src: "/assets/meshes2/44930695_sept18_hero18_103a_crab,_low_poly_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44930695_sept18_hero18_103a_crab,_low_poly_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/whipple_creek_regional_park_04_1k.hdr",
        },
        ghost: {
            src: "/assets/meshes2/44934035_sept18_hero19_113a_DSLR_photo_of_a_ghost_eating_a_hamburger_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44934035_sept18_hero19_113a_DSLR_photo_of_a_ghost_eating_a_hamburger_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
        },
        corgi: {
            src: "/assets/meshes2/44960400_sept18_hero20peter_117a_plush_toy_of_a_corgi_nurse_1step.glb",
            poster: "https://dreamfusion-cdn.ajayj.com/mesh_previews2/44960400_sept18_hero20peter_117a_plush_toy_of_a_corgi_nurse_1step.png",
            "environment-image": "https://modelviewer.dev/shared-assets/environments/spruit_sunrise_1k_HDR.hdr",
        },
    };

    let meshRows = [
        ['frog', 'chick'],
        ['ghost', 'pig'],
        ['eagle', 'crab'],
        ['lemur', 'corgi'],
    ];

    let container = document.getElementById("meshContainer");
    meshRows.forEach((meshIds) => {
        let row = document.createElement("DIV");
        row.classList = "row";

        meshIds.forEach((meshId) => {
            let col = document.createElement("DIV");
            col.classList = "col-md-6 col-sm-6 my-auto";
            
            // Model viewer.
            let model = document.createElement("model-viewer");
            for (const attr in sharedAttributes) {
                if (attr != "caption" && attr != "shortCaption")
                    model.setAttribute(attr, sharedAttributes[attr]);
            }
            for (const attrCustom in meshAttributes[meshId]) {
                if (attrCustom != "caption" && attrCustom != "shortCaption")
                    model.setAttribute(attrCustom, meshAttributes[meshId][attrCustom]);
            }
            model.id = 'mesh-' + meshId;

            // Controls.
            let controls = document.createElement("div");
            controls.className = "controls";
            let buttonLoad = document.createElement("button");
            buttonLoad.classList = "btn btn-primary loads-model";
            buttonLoad.setAttribute("data-controls", model.id);
            buttonLoad.appendChild(document.createTextNode("Load 3D model"));
            // let buttonToggle = document.createElement("button");
            // buttonToggle.classList = "btn btn-primary toggles-texture";
            // buttonToggle.setAttribute("data-controls", model.id);
            // buttonToggle.appendChild(document.createTextNode("Toggle texture"));
            controls.appendChild(buttonLoad);
            // controls.appendChild(buttonToggle);

            // Caption.
            let caption = document.createElement("p");
            caption.classList = "caption";
            caption.title = meshAttributes[meshId]["caption"] || "";
            caption.appendChild(document.createTextNode(meshAttributes[meshId]["shortCaption"] || caption.title));

            col.appendChild(model);
            col.appendChild(controls);
            col.appendChild(caption);
            row.appendChild(col);
        });

        container.appendChild(row);
    });

    // Toggle texture handlers.
    document.querySelectorAll('button.toggles-texture').forEach((button) => {
        button.addEventListener('click', () => {
            let model = document.getElementById(button.getAttribute("data-controls"));

            console.log(model.model);
            let material = model.model.materials[0];
            let metallic = material.pbrMetallicRoughness;
            let originalTexture = metallic.pbrMetallicRoughness.baseColorTexture;
            let originalBaseColor = metallic.pbrMetallicRoughness.baseColorFactor;
            console.log('model load', model.model, material, 'metallic', metallic, originalTexture);

            let textureButton = model.querySelector('.toggles-parent-texture');
            console.log('texture button', textureButton);
            // if (originalTexture && textureButton) {
            let textureOn = true;
            textureButton.onclick = () => {
                if (textureOn) {
                    // model.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null);
                    // model.model.materials[0].pbrMetallicRoughness.setBaseColorFactor([1., 1., 1., 1.]);
                    // textureOn = false;
                    // console.log('toggle texture off');
                } else {
                    // model.model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(originalTexture) ;
                    // model.model.materials[0].pbrMetallicRoughness.setBaseColorFactor(originalBaseColor);
                    // textureOn = true;
                    // console.log('toggle texture on');
                }
            };
        });
    });

    // Click to load handlers for 3D meshes.
    document.querySelectorAll('button.loads-model').forEach((button) => {
        button.setAttribute('data-action', 'load');
        button.addEventListener('click', () => {
            // button.classList = button.classList + " disappearing";
            // let model = button.parentElement.parentElement;
            let model = document.getElementById(button.getAttribute("data-controls"));

            if (button.getAttribute('data-action') == 'load') {
                model.dismissPoster();
                button.classList = "btn btn-disabled";
                button.innerHTML = "Hide 3D model";
                button.setAttribute('data-action', 'unload');
            } else {
                model.showPoster();
                button.classList = "btn btn-primary";
                button.innerHTML = "Load 3D model";
                button.setAttribute('data-action', 'load');
            };
        });
    });
    // document.querySelectorAll('button.toggles-parent-texture').forEach((button) => {
    //     let model = button.parentElement.parentElement;
    //     let originalTexture = model.materials[0].pbrMetallicRoughness.baseColorTexture;
    //     let textureOn = true;
    //     button.addEventListener('click', () => {
    //         if (textureOn) {
    //             model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(null);
    //             textureOn = false;
    //         } else {
    //             model.materials[0].pbrMetallicRoughness.baseColorTexture.setTexture(originalTexture) ;
    //             textureOn = true;
    //         }
    //     });
    // });
})();