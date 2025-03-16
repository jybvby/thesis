function displayImages() {
    const school = document.getElementById('School').value;
    const colorPalette = document.getElementById('colorPalette').value;
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (school && colorPalette) {
        const imageMappings = {
            'School of Natural Sciences and Mathematics': {
                'cool': [
                    'images/School of Natural Sciences and Mathematics_cool_1.jpg',
                    'images/School of Natural Sciences and Mathematics_cool_2.jpg',
                    'images/School of Natural Sciences and Mathematics_cool_3.jpg'
                ],
                'neutral': [
                    'images/School of Natural Sciences and Mathematics_neutral_1.jpg',
                    'images/School of Natural Sciences and Mathematics_neutral_2.jpg',
                    'images/School of Natural Sciences and Mathematics_neutral_3.jpg'
                ],
                'vibrant': [
                    'images/School of Natural Sciences and Mathematics_vibrant_1.jpg',
                    'images/School of Natural Sciences and Mathematics_vibrant_2.jpg',
                    'images/School of Natural Sciences and Mathematics_vibrant_3.jpg'
                ]
            },
            'School of Humanities and Social Sciences': {
                'cool': [
                    'images/Humanities and Social Sciences_cool_1.jpg',
                    'images/Humanities and Social Sciences_cool_2.jpg',
                    'images/Humanities and Social Sciences_cool_3.jpg'
                ],
                'neutral': [
                    'images/Humanities and Social Sciences_neutral_1.jpg',
                    'images/Humanities and Social Sciences_neutral_2.jpg',
                    'images/Humanities and Social Sciences_neutral_3.jpg'
                ],
                'vibrant': [
                    'images/Humanities and Social Sciences_vibrant_1.jpg',
                    'images/Humanities and Social Sciences_vibrant_2.jpg',
                    'images/Humanities and Social Sciences_vibrant_3.jpg'
                ]
            },
            'School Of Business': {
                'cool': [
                    'images/School Of business_cool_1.jpg',
                    'images/School Of business_cool_2.jpg',
                    'images/School Of business_cool_3.jpg'
                ],
                'neutral': [
                    'images/School Of business_neutral_1.jpg',
                    'images/School Of business_neutral_2.jpg',
                    'images/School Of business_neutral_3.jpg'
                ],
                'vibrant': [
                    'images/School Of business_vibrant_1.jpg',
                    'images/School Of business_vibrant_2.jpg',
                    'images/School Of business_vibrant_3.jpg'
                ]
            },
            'School of Education': {
                'cool': [
                    'images/School of Education_cool_1.jpg',
                    'images/School of Education_cool_2.jpg',
                    'images/School of Education_cool_3.jpg'
                ],
                'neutral': [
                    'images/School of Education_neutral_1.jpg',
                    'images/School of Education_neutral_2.jpg',
                    'images/School of Education_neutral_3.jpg'
                ],
                'vibrant': [
                    'images/School of Education_vibrant_1.jpg',
                    'images/School of Education_vibrant_2.jpg',
                    'images/School of Education_vibrant_3.jpg'
                ]
            }
        };

        const imagePaths = imageMappings[school][colorPalette];
        if (imagePaths) {
            imagePaths.forEach(path => {
                const img = document.createElement('img');
                img.src = path;
                imageContainer.appendChild(img);
            });
        } else {
            imageContainer.innerText = 'Images not found for this combination.';
        }
    } else {
        imageContainer.innerText = 'Please select both a school and a color palette.';
    }
}