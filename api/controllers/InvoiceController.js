/**
* InvoiceController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/
module.exports = {

  //
  // ────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: C R E A T E    I N V O I C E : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────────
  //

  

  async createInvoice(req,res){
    let requestData=req.body;
    await Invoice.create(requestData).then((result)=>{
      res.ok(result);
    })
        .catch((error)=>{
          res.badRequest(error);
        });
  }
};
