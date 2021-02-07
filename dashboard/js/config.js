function config() {
    return {
            roi: {"x0": 0, "x1": 7602, "y0": 0, "y1": 5471},
            imageSize: [262144, 188659],
            tiles: 'https://raw.githubusercontent.com/acycliq/full_coronal_jpg_datastore/master/262144px/{z}/{y}/{x}.jpg_XXXX',
            cellData: 'http://localhost:63342/pciSeq/dashboard/data/cellData/content.json',
            geneData: 'http://localhost:63342/pciSeq/dashboard/data/geneData/content.json',
            cellBoundaries: 'http://localhost:63342/pciSeq/dashboard/data/cellBoundaries/content.json',
            class_name_separator: '.' //The delimiter in the class name string, eg if name is Astro.1, then use the dot as a separator, if Astro1 then use an empty string. It is used in a menu/control to show the class names nested under its broader name
        }
}
