function congratsPage(req, res) {
    res.render('congrats',{
        locals:{
            message:"Y0U D1D 17!!!"
        }
    })
}

module.exports = congratsPage;