ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32637").setExtent([472278.089997, 4979391.249626, 530308.817766, 5007364.196545]);
var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Городской округ Краснодар',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Городской округ Краснодар'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2,
maxResolution:28.00446615226196,
 minResolution:0.00028004466152261963,

                style: style__2,
                popuplayertitle: 'Озеленённые территории',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Озеленённые территории'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3,
maxResolution:56.00893230452392,
 minResolution:28.00446615226196,

                style: style__3,
                popuplayertitle: 'Обеспеченность озеленёнными территориями, кв.м/чел.',
                interactive: true,
    title: 'Обеспеченность озеленёнными территориями, кв.м/чел.<br />\
    <img src="styles/legend/_3_0.png" /> 0.0 - 0.0<br />\
    <img src="styles/legend/_3_1.png" /> 0 - 0.83<br />\
    <img src="styles/legend/_3_2.png" /> 0.83 - 5.74<br />\
    <img src="styles/legend/_3_3.png" /> 5.74 - 27.53<br />\
    <img src="styles/legend/_3_4.png" /> 27.53 - 142.26<br />\
    <img src="styles/legend/_3_5.png" /> 142.26 - 399991.85<br />' });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32637'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource__4, minResolution:56.00893230452392,

                radius: 2 * 2,
                gradient: ['#30123b', '#321543', '#33184a', '#341b51', '#351e58', '#36215f', '#372466', '#38276d', '#392a73', '#3a2d79', '#3b2f80', '#3c3286', '#3d358b', '#3e3891', '#3f3b97', '#3f3e9c', '#4040a2', '#4143a7', '#4146ac', '#4249b1', '#424bb5', '#434eba', '#4451bf', '#4454c3', '#4456c7', '#4559cb', '#455ccf', '#455ed3', '#4661d6', '#4664da', '#4666dd', '#4669e0', '#466be3', '#476ee6', '#4771e9', '#4773eb', '#4776ee', '#4778f0', '#477bf2', '#467df4', '#4680f6', '#4682f8', '#4685fa', '#4687fb', '#458afc', '#458cfd', '#448ffe', '#4391fe', '#4294ff', '#4196ff', '#4099ff', '#3e9bfe', '#3d9efe', '#3ba0fd', '#3aa3fc', '#38a5fb', '#37a8fa', '#35abf8', '#33adf7', '#31aff5', '#2fb2f4', '#2eb4f2', '#2cb7f0', '#2ab9ee', '#28bceb', '#27bee9', '#25c0e7', '#23c3e4', '#22c5e2', '#20c7df', '#1fc9dd', '#1ecbda', '#1ccdd8', '#1bd0d5', '#1ad2d2', '#1ad4d0', '#19d5cd', '#18d7ca', '#18d9c8', '#18dbc5', '#18ddc2', '#18dec0', '#18e0bd', '#19e2bb', '#19e3b9', '#1ae4b6', '#1ce6b4', '#1de7b2', '#1fe9af', '#20eaac', '#22ebaa', '#25eca7', '#27eea4', '#2aefa1', '#2cf09e', '#2ff19b', '#32f298', '#35f394', '#38f491', '#3cf58e', '#3ff68a', '#43f787', '#46f884', '#4af880', '#4ef97d', '#52fa7a', '#55fa76', '#59fb73', '#5dfc6f', '#61fc6c', '#65fd69', '#69fd66', '#6dfe62', '#71fe5f', '#75fe5c', '#79fe59', '#7dff56', '#80ff53', '#84ff51', '#88ff4e', '#8bff4b', '#8fff49', '#92ff47', '#96fe44', '#99fe42', '#9cfe40', '#9ffd3f', '#a1fd3d', '#a4fc3c', '#a7fc3a', '#a9fb39', '#acfb38', '#affa37', '#b1f936', '#b4f836', '#b7f735', '#b9f635', '#bcf534', '#bef434', '#c1f334', '#c3f134', '#c6f034', '#c8ef34', '#cbed34', '#cdec34', '#d0ea34', '#d2e935', '#d4e735', '#d7e535', '#d9e436', '#dbe236', '#dde037', '#dfdf37', '#e1dd37', '#e3db38', '#e5d938', '#e7d739', '#e9d539', '#ebd339', '#ecd13a', '#eecf3a', '#efcd3a', '#f1cb3a', '#f2c93a', '#f4c73a', '#f5c53a', '#f6c33a', '#f7c13a', '#f8be39', '#f9bc39', '#faba39', '#fbb838', '#fbb637', '#fcb336', '#fcb136', '#fdae35', '#fdac34', '#fea933', '#fea732', '#fea431', '#fea130', '#fe9e2f', '#fe9b2d', '#fe992c', '#fe962b', '#fe932a', '#fe9029', '#fd8d27', '#fd8a26', '#fc8725', '#fc8423', '#fb8122', '#fb7e21', '#fa7b1f', '#f9781e', '#f9751d', '#f8721c', '#f76f1a', '#f66c19', '#f56918', '#f46617', '#f36315', '#f26014', '#f15d13', '#f05b12', '#ef5811', '#ed5510', '#ec530f', '#eb500e', '#ea4e0d', '#e84b0c', '#e7490c', '#e5470b', '#e4450a', '#e2430a', '#e14109', '#df3f08', '#dd3d08', '#dc3b07', '#da3907', '#d83706', '#d63506', '#d43305', '#d23105', '#d02f05', '#ce2d04', '#cc2b04', '#ca2a04', '#c82803', '#c52603', '#c32503', '#c12302', '#be2102', '#bc2002', '#b91e02', '#b71d02', '#b41b01', '#b21a01', '#af1801', '#ac1701', '#a91601', '#a71401', '#a41301', '#a11201', '#9e1001', '#9b0f01', '#980e01', '#950d01', '#920b01', '#8e0a01', '#8b0902', '#880802', '#850702', '#810602', '#7a0403'],
                blur: 15,
                shadow: 250,
                title: 'Плотность расположения озеленённых территорий'
            });
var group_final = new ol.layer.Group({
                                layers: [lyr_Positronretina_0,lyr__1,lyr__2,lyr__3,lyr__4,],
                                fold: 'open',
                                title: 'final'});

lyr_Positronretina_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);
var layersList = [group_final];
lyr__1.set('fieldAliases', {'full_id': 'full_id', 'boundary': 'boundary', 'name': 'name', });
lyr__2.set('fieldAliases', {'full_id': 'full_id', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'name': 'Название', 'object_type': 'object_type', 'area': 'area', });
lyr__3.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'area_sum': 'area_sum', 'population_sum': 'population_sum', 'green_per_capita': 'кв.м/чел.', });
lyr__1.set('fieldImages', {'full_id': 'Hidden', 'boundary': 'Hidden', 'name': 'Hidden', });
lyr__2.set('fieldImages', {'full_id': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'name': 'TextEdit', 'object_type': 'TextEdit', 'area': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'Range', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'Range', 'col_index': 'Range', 'area_sum': 'TextEdit', 'population_sum': 'TextEdit', 'green_per_capita': 'TextEdit', });
lyr__1.set('fieldLabels', {});
lyr__2.set('fieldLabels', {'full_id': 'hidden field', 'addr:street': 'hidden field', 'addr:postcode': 'hidden field', 'addr:housenumber': 'hidden field', 'name': 'inline label - always visible', 'object_type': 'hidden field', 'area': 'hidden field', });
lyr__3.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'area_sum': 'hidden field', 'population_sum': 'hidden field', 'green_per_capita': 'inline label - always visible', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});