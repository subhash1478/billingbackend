module.exports = {
  //
  // ────────────────────────────────────────────────────────────── I ──────────
  //   :::::: A D D  P R O D U C T : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────
  //
  async createProduct(req,res){
    let param=req.body;
    let obj={
      product:param.product,
      description:param.description,
      uom:param.uom,
      qty:param.qty,
      unitPrice:param.unitPrice,
      tax:param.tax,
      discount:param.discount
    };
    await Product.create(obj)
          .then( (result)=>{
            return ResponseService.json(200, res, 'Product created Successful', result);
          })
          .catch((err)=>{
            return ResponseService.json(500, res, 'Server Error', err);
          });
  },
  //
  // ────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T  P R O D U C T : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────
  //
  async getProduct(req,res){

    await Product.find()
          .then( (result)=>{
            return ResponseService.json(200, res, 'Product retrieve successful',result);

          })
          .catch((err)=>{
            return ResponseService.json(500, res, 'Server Error', err);
          });
  },
  //
  // ──────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   P R O D U C T   B Y   I D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────
  //
  async getProductById(req,res){
    let requestData=req.query;
    let obj={
      id: requestData.id,
    };
    await Product.findOne(obj)
          .then( (result)=>{
            return ResponseService.json(200, res, 'Question retrieve successful', result);
          })
          .catch((err)=>{
            return ResponseService.json(500, res, 'Server Error', err);
          });
  },
  //
  // ──────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: U P D A T E  P R O D U C T : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────
  //
  async updateProduct(req,res){
    let param=req.body;
    let obj={
      product:param.product,
      description:param.description,
      uom:param.uom,
      qty:param.qty,
      unitPrice:param.unitPrice,
      tax:param.tax,
      discount:param.discount
    };
    await  Product.update({
      id: param.id,
    }).set(obj)
          .then( (result)=>{
            return ResponseService.json(200, res, 'update Successful', result);
          })
          .catch((err)=>{
            return ResponseService.json(500, res, 'Server Error', err);
          });
  },
  //
  // ──────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: D E L E T E  P R O D U C T : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────
  //
  async deleteProduct(req,res){
    let requestData=req.body;
    await Product.destroy({
      id: requestData.id,
    })
          .then( (result)=>{
            return ResponseService.json(200, res, 'Product deleted Successful', result);
          })
          .catch((err)=>{
            return ResponseService.json(500, res, 'Server Error', err);
          });
  },

};

