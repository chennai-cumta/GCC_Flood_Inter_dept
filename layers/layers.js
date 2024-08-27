var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_DigitalElevationModelDEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Digital Elevation Model (DEM)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DigitalElevationModelDEM_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8855465.492605, 1399149.712756, 8944335.552718, 1524070.549817]
                            })
                        });
var format_GCCWardBoundary_2 = new ol.format.GeoJSON();
var features_GCCWardBoundary_2 = format_GCCWardBoundary_2.readFeatures(json_GCCWardBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCWardBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCWardBoundary_2.addFeatures(features_GCCWardBoundary_2);
var lyr_GCCWardBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCCWardBoundary_2, 
                style: style_GCCWardBoundary_2,
                popuplayertitle: "GCC Ward Boundary",
                interactive: true,
                title: '<img src="styles/legend/GCCWardBoundary_2.png" /> GCC Ward Boundary'
            });
var format_GCCZoneBoundary_3 = new ol.format.GeoJSON();
var features_GCCZoneBoundary_3 = format_GCCZoneBoundary_3.readFeatures(json_GCCZoneBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GCCZoneBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCCZoneBoundary_3.addFeatures(features_GCCZoneBoundary_3);
var lyr_GCCZoneBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCCZoneBoundary_3, 
                style: style_GCCZoneBoundary_3,
                popuplayertitle: "GCC Zone Boundary",
                interactive: true,
                title: '<img src="styles/legend/GCCZoneBoundary_3.png" /> GCC Zone Boundary'
            });
var format_RiversTanks_4 = new ol.format.GeoJSON();
var features_RiversTanks_4 = format_RiversTanks_4.readFeatures(json_RiversTanks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiversTanks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiversTanks_4.addFeatures(features_RiversTanks_4);
var lyr_RiversTanks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiversTanks_4, 
                style: style_RiversTanks_4,
                popuplayertitle: "Rivers & Tanks",
                interactive: true,
                title: '<img src="styles/legend/RiversTanks_4.png" /> Rivers & Tanks'
            });
var lyr_NaturalDrainageFlow_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Natural Drainage Flow",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NaturalDrainageFlow_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8855923.757879, 1399615.251866, 8944066.530689, 1522644.903893]
                            })
                        });
var format_InterDepartmentIssueLocation_6 = new ol.format.GeoJSON();
var features_InterDepartmentIssueLocation_6 = format_InterDepartmentIssueLocation_6.readFeatures(json_InterDepartmentIssueLocation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InterDepartmentIssueLocation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InterDepartmentIssueLocation_6.addFeatures(features_InterDepartmentIssueLocation_6);
var lyr_InterDepartmentIssueLocation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InterDepartmentIssueLocation_6, 
                style: style_InterDepartmentIssueLocation_6,
                popuplayertitle: "Inter-Department Issue Location",
                interactive: true,
                title: '<img src="styles/legend/InterDepartmentIssueLocation_6.png" /> Inter-Department Issue Location'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_DigitalElevationModelDEM_1.setVisible(true);lyr_GCCWardBoundary_2.setVisible(true);lyr_GCCZoneBoundary_3.setVisible(true);lyr_RiversTanks_4.setVisible(true);lyr_NaturalDrainageFlow_5.setVisible(true);lyr_InterDepartmentIssueLocation_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_DigitalElevationModelDEM_1,lyr_GCCWardBoundary_2,lyr_GCCZoneBoundary_3,lyr_RiversTanks_4,lyr_NaturalDrainageFlow_5,lyr_InterDepartmentIssueLocation_6];
lyr_GCCWardBoundary_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'ZONE_NO': 'ZONE_NO', 'ZONE_NAME': 'ZONE_NAME', });
lyr_GCCZoneBoundary_3.set('fieldAliases', {'fid': 'fid', 'Zone_No': 'Zone_No', 'Zone Name': 'Zone Name', });
lyr_RiversTanks_4.set('fieldAliases', {'Id': 'Id', });
lyr_InterDepartmentIssueLocation_6.set('fieldAliases', {'S.No': 'S.No', 'Issues': 'Issues', 'Zone': 'Zone', 'Ward': 'Ward', 'x': 'x', 'y': 'y', 'Dept': 'Dept', 'Locations': 'Locations', });
lyr_GCCWardBoundary_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'ZONE_NO': 'TextEdit', 'ZONE_NAME': 'TextEdit', });
lyr_GCCZoneBoundary_3.set('fieldImages', {'fid': 'TextEdit', 'Zone_No': 'TextEdit', 'Zone Name': 'TextEdit', });
lyr_RiversTanks_4.set('fieldImages', {'Id': 'TextEdit', });
lyr_InterDepartmentIssueLocation_6.set('fieldImages', {'S.No': 'Range', 'Issues': 'TextEdit', 'Zone': 'TextEdit', 'Ward': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Dept': 'TextEdit', 'Locations': 'TextEdit', });
lyr_GCCWardBoundary_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'ZONE_NO': 'inline label - always visible', 'ZONE_NAME': 'inline label - always visible', });
lyr_GCCZoneBoundary_3.set('fieldLabels', {'fid': 'hidden field', 'Zone_No': 'inline label - always visible', 'Zone Name': 'inline label - always visible', });
lyr_RiversTanks_4.set('fieldLabels', {'Id': 'no label', });
lyr_InterDepartmentIssueLocation_6.set('fieldLabels', {'S.No': 'hidden field', 'Issues': 'inline label - always visible', 'Zone': 'inline label - always visible', 'Ward': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', 'Dept': 'inline label - always visible', 'Locations': 'inline label - always visible', });
lyr_InterDepartmentIssueLocation_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});