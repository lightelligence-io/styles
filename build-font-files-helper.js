const inputPath = 'source/style/08-fonts/';
const outputPath = 'dist/08-fonts/';
const fonts = ['PTSans', 'OverpassMono'];
const fontStyles = {
    PTSans: ['Bold', 'BoldItalic', 'Caption', 'CaptionBold', 'Italic', 'Narrow', 'NarrowBold', 'Regular'],
    OverpassMono: ['Bold', 'Light', 'Regular', 'SemiBold']
};
const exportFonts = {};

fonts.forEach((font) => {
    fontStyles[font].forEach((fontStyle) => {
        const fontFile1 = `${font}-${fontStyle}.woff`;
        const fontFile2 = `${font}-${fontStyle}.woff2`;
        exportFonts[`${inputPath}${fontFile1}`] = `${outputPath}${fontFile1}`;
        exportFonts[`${inputPath}${fontFile2}`] = `${outputPath}${fontFile2}`;
    });
});
exportFonts.verbose = true;

export { exportFonts };