


export interface SaveFileType {
    imageFormat: FileOutputFormat;
    imageCompression: ImageCompression[];
}

export enum ImageCompression {
    //** Unknown compression.  */
    UNKNOWN = -1,
    //** Default compression.  */
    DEFAULT = 0,
    //** None save compression.  */
    NONE = 1,
    //** RLE save compression.  */
    RLE = 2,
    //** CCITT3 save compression.  */
    CCITT3 = 3,
    //** CCITT4 save compression.  */
    CCITT4 = 4,
    //** LZW save compression.  */
    LZW = 5,
    //** JPEG save compression.  */
    JPEG = 7,
	//** Deflate compression, as recognized by Adobe.*/
    ADOBE_DEFLATE = 8,
    //** DEFLATE image compression.*/
    DEFLATE = 32946,
    //** PACKBITS image compression.*/
    PACKBITS = 32773
};

export enum FileOutputFormat {
    //** Default output format */
    DEFAULT = -2,
    //** BMP output format */
    BMP = 0,
    //** ICO output format */
    ICO = 1,
    //** JPEG output format */
    JPEG = 2,
    //** JNG output format */
    JNG = 3,
    //** PBM output format */
    PBM = 7,
    //** PGM output format */
    PGM = 11,
    //** PNG output format */
    PNG = 13,
    //** PPM output format */
    PPM = 14,
    //** TARGA output format */
    TARGA = 17,
    //** TIFF output format */
    TIFF = 18,
    //** WBMP output format */
    WBMP = 19,
    //** XPM output format */
    XPM = 23,
    //** GIF output format */
    GIF = 25,
    //** J2K output format */
    J2K = 30,
    //** PFM output format */
    PFM = 32,
    //** WEBP output format */
    WEBP = 35,
    //** JXR output format */
    JXR = 36,
    //** PDF image output format */
    PDF = 40
};

export enum savePageOptions {
    //** A specific page.  */
    PAGE = 0,
    //** A range of pages.  */
    RANGE = 1,
    //** All pages.  */
    ALL = 2
};

export enum OCRLanguage {
    //** English OCR Language.  */
    English = 0,
    //** French OCR Language.  */
    French = 1,
    //** Italian OCR Language.  */
    Italian = 2,
    //** German OCR Language.  */
    German = 3,
    //** Spanish OCR Language.  */
    Spanish = 4,
    //** Dutch OCR Language.  */
    Dutch = 5,
    //** Portuguese OCR Language.  */
    Portuguese = 6,
    //** Ukrainian OCR Language.  */
    Ukrainian = 7,
    //** Turkish OCR Language.  */
    Turkish = 8,
    //** Thai OCR Language.  */
    Thai = 9,
    //** Swedish OCR Language.  */
    Swedish = 10,
    //** Swahili OCR Language.  */
    Swahili = 11,
    //** Serbian OCR Language.  */
    Serbian = 12,
    //** Albanian OCR Language.  */
    Albanian = 13,
    //** Slovenian OCR Language.  */
    Slovenian = 14,
    //** Slovakian OCR Language.  */
    Slovakian = 15,
    //** Romanian OCR Language.  */
    Romanian = 16,
    //** Polish OCR Language.  */
    Polish = 17,
    //** Norwegian OCR Language.  */
    Norwegian = 18,
    //** Lithuanian OCR Language.  */
    Lithuanian = 19,
    //** Korean OCR Language.  */
    Korean = 20,
    //** Kannada OCR Language.  */
    Kannada = 21,
    //** Icelandic OCR Language.  */
    Icelandic = 22,
    //** Indonesian OCR Language.  */
    Indonesian = 23,
    //** Hindi OCR Language.  */
    Hindi = 24,
    //** Hungarian OCR Language.  */
    Hungarian = 25,
    //** Croatian OCR Language.  */
    Croatian = 26,
    //** Hebrew OCR Language.  */
    Hebrew = 27,
    //** Galician OCR Language.  */
    Galician = 28,
    //** Finnish OCR Language.  */
    Finnish = 29,
    //** Basque OCR Language.  */
    Basque = 30,
    //** Estonian OCR Language.  */
    Estonian = 31,
    //** Esperanto OCR Language.  */
    Esperanto = 32,
    //** Greek OCR Language.  */
    Greek = 33,
    //** Danish OCR Language.  */
    Danish = 34,
    //** Czech OCR Language.  */
    Czech = 35,
    //** Catalan OCR Language.  */
    Catalan = 36,
    //** Bulgarian OCR Language.  */
    Bulgarian = 37,
    //** Belorussian OCR Language.  */
    Belarusian = 38,
    //** Azerbaijan OCR Language.  */
    Azerbaijani = 39,
    //** Arabic OCR Language.  */
    Arabic = 40,
    //** Afrikaans OCR Language.  */
    Afrikaans = 41,
    //** Japanese OCR Language.  */
    Japanese = 42,
    //** Chinese Simplified OCR Language.  */
    Chinese_Simplified = 43,
    //** Chinese Traditional OCR Language.  */
    Chinese_Traditional = 44,
    //** Russian OCR Language.  */
    Russian = 45,
    //** Vietnamese OCR Language.  */
    Vietnamese = 46,
    //** Frankish OCR Language.  */
    Frankish = 47,
    //** Math Equation OCR Language.  */
    Math_Equation = 48,
    //** MIRC encoding font OCR Language.  */
    MIRCE = 98,
    //** MIRC OCR Language.  */
    MIRC = 99
};

export enum OCRType {
    //** Run Tesseract only OCR type - legacy.  */
    OEM_TESSERACT_ONLY = 0,
    //** Cube only OCR type - better accuracy, but slower.  */
    OEM_CUBE_LSTM_ONLY = 1,
    //** Combine results OCR type - best accuracy.  */
    OEM_CUBE_LSTM_COMBINED = 2,
    //** Default OCR type.  */
    OEM_DEFAULT = 3
};

export enum FileFormat {
    //** Used for document imaging. Native Linux format */
    TIFF = 0,
    //** Native Macintosh format */
    PICT = 1,
    //** Native Microsoft format */
    BMP = 2,
    //** Used for document imaging */
    XBM = 3,
    //** Wrapper for JPEG images */
    JFIF = 4,
    //** FlashPix, used with digital cameras */
    FPX = 5,
    //** Multi-page TIFF files */
    TIFFMULTI = 6,
    //** An image format standard intended for use on the web, replaces GIF */
    PNG = 7,
    //** A standard from JPEG, intended to replace JFIF, also supports JBIG */
    SPIFF = 8,
    //** File format for use with digital cameras */
    EXIF = 9,
    //** A file format from Adobe */
    PDF = 10,
    //** A file format from the Joint Photographic Experts Group ISO/IEC 15444-1 */
    JP2 = 11,
    //** A file format from the Joint Photographic Experts Group ISO/IEC 15444-2 */
    JPX = 13,
    //** A file format from LizardTech */
    DEJAVU = 14,
    //** A file format from Adobe PDF/A, Version 1 */
    PDFA = 15,
    //** A file format from Adobe PDF/A, Version 2 */
    PDFA2 = 16
};

export const fileFormatAndCompression: SaveFileType[] = [
    {
      imageFormat: FileOutputFormat.JPEG,
      imageCompression: [ImageCompression.JPEG]
    },
    {    
      imageFormat : FileOutputFormat.PDF,
      imageCompression : [
        ImageCompression.NONE,
        ImageCompression.CCITT3,
        ImageCompression.CCITT4,
        ImageCompression.JPEG
      ]
    },
    {    
      imageFormat : FileOutputFormat.TIFF,
      imageCompression : [
        ImageCompression.NONE,
        ImageCompression.CCITT3,
        ImageCompression.CCITT4,
        ImageCompression.JPEG
      ]
    }
  ]