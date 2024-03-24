const express = require('express');
const routes = express.Router();


routes.get('/', (req, res) => {
    res.render('cindex')
})
routes.get('/products', (req, res) => { 
    res.render('products')
})
routes.get('/services', (req, res) => { 
    res.render('services')
})
routes.get('/about-us', (req, res) => { 
    res.render('about', {aboutUs:true})
})
// products Deatails
routes.get('/diagnostic', (req, res) => { 
    res.render('diagnostic', {diag:true})
})
routes.get('/medical-equip', (req, res) => { 
    res.render('medical-equip', {medicalEquip:true})
})
routes.get('/surgical-inst', (req, res) => { 
    res.render('surgical-inst')
})
routes.get('/personal-p', (req, res) => { 
    res.render('personal-p')
})
routes.get('/vaccines', (req, res) => { 
    res.render('vaccines')
})
routes.get('/sw-app', (req, res) => { 
    res.render('sw-app')
})
// diagnostic imaging routs 
routes.get('/mri', (req, res) => {
    res.render('diagnostic', {mri:true, diag:false})
})
routes.get('/ct', (req, res) => {
    res.render('diagnostic', {ct:true, diag:false})
})
routes.get('/angio', (req, res) => {
    res.render('diagnostic', {angio:true, diag:false})
})
routes.get('/xray', (req, res) => {
    res.render('diagnostic', {xray:true, diag:false})
})
routes.get('/ultra', (req, res) => {
    res.render('diagnostic', {ultra:true, diag:false})
})
routes.get('/cr-dr', (req, res) => {
    res.render('diagnostic', {crDr:true, diag:false})
})
routes.get('/spect', (req, res) => {
    res.render('diagnostic', {spect:true, diag:false})
})
routes.get('/med-imag-access', (req, res) => {
    res.render('diagnostic', { dxray: true, diag: false })
});
// services details routs
routes.get('/services-details', (req, res) => {
    res.render('services-details', {services:true})
    // dxray:true, diag:false
})
routes.get('/repairment-detail', (req, res) => {
    res.render('services-details', {repair:true})
    // dxray:true, diag:false
})
routes.get('/planning', (req, res) => {
    res.render('services-details', {planning:true})
    // dxray:true, diag:false
})
routes.get('/training', (req, res) => {
    res.render('services-details', {training:true})
    // dxray:true, diag:false
})
// --------------------------- About Us ----------------------------------------------------------------
routes.get('/tenders', (req, res) => {
    res.render('about', {tenders:true})
    // dxray:true, diag:false
})
routes.get('/careers', (req, res) => {
    res.render('about', {careers:true})
    // dxray:true, diag:false
})

routes.get('/contacts', (req, res) => {
    res.render('about', {contacts:true})
    // dxray:true, diag:false
})
routes.get('', (req, res) => {
    res.render('', {})
    // dxray:true, diag:false
})




routes.get('/', (req, res) => { 
    res.render('')
})


// medical equipemtns 
routes.get('/dialysis', (req, res) => { 
    res.render('medical-equip',{dialysis:true, medicalEquip:false})
})
routes.get('/monitor', (req, res) => { 
    res.render('medical-equip',{monitor:true, medicalEquip:false})
})
routes.get('/vent', (req, res) => { 
    res.render('medical-equip',{vent:true, medicalEquip:false})
})
routes.get('/endo', (req, res) => { 
    res.render('medical-equip',{endo:true, medicalEquip:false})
})
routes.get('/infu-pump', (req, res) => { 
    res.render('medical-equip',{infuPump:true, medicalEquip:false})
})
routes.get('/defib', (req, res) => { 
    res.render('medical-equip',{defib:true, medicalEquip:false})
})
routes.get('/oxygen', (req, res) => { 
    res.render('medical-equip',{oxygen:true, medicalEquip:false})
})
routes.get('/suction', (req, res) => { 
    res.render('medical-equip',{suction:true, medicalEquip:false})
})


module.exports =  routes