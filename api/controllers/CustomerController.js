module.exports = {
  //
  // ────────────────────────────────────────────────────────────── I ──────────
  //   :::::: A D D  Customer : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────
  //
  async createCustomer(req,res){
    let param=req.body;
    let obj={
      firstName:param.firstName,
      lastName:param.lastName,
      phone:param.phone,
      address:param.addresses,
      email:param.email
    };
    await Customer.create(obj)
        .then( (result)=>{
          return ResponseService.json(200, res, 'Customer created Successful', result);
        })
        .catch((err)=>{
          return ResponseService.json(500, res, 'Server Error', err);
        });
  },
  //
  // ────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T  Customer : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────
  //
  async getCustomer(req,res){

    await Customer.find()
        .then( (result)=>{
          return ResponseService.json(200, res, 'Customer retrieve successful',result);

        })
        .catch((err)=>{
          return ResponseService.json(500, res, 'Server Error', err);
        });
  },
  //
  // ──────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: G E T   Customer   B Y   I D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────
  //
  async getCustomerById(req,res){
    let requestData=req.query;
    let obj={
      id: requestData.id,
    };
    await Customer.findOne(obj)
        .then( (result)=>{
          return ResponseService.json(200, res, 'Question retrieve successful', result);
        })
        .catch((err)=>{
          return ResponseService.json(500, res, 'Server Error', err);
        });
  },
  //
  // ──────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: U P D A T E Customer : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────
  //
  async updateCustomer(req,res){
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
    await  Customer.update({
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
  //   :::::: D E L E T E  Customer : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────
  //
  async deleteCustomer(req,res){
    let requestData=req.body;
    await Customer.destroy({
      id: requestData.id,
    })
        .then( (result)=>{
          return ResponseService.json(200, res, 'Customer deleted Successful', result);
        })
        .catch((err)=>{
          return ResponseService.json(500, res, 'Server Error', err);
        });
  },

};
