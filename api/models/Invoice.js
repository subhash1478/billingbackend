

module.exports = {

  attributes: {
    client:{type:'string'},
    documentNumber:{type:'string'},
    issueDate:{type:'string'},
    poNumber:{type:'string'},
    poDate:{type:'string'},
    paymentTerms:{type:'string'},
    dueDate:{type:'string'},
    placeOfSupply:{type:'string'},
    shipTo:{type:'string'},
    description:{type:'string'},
    uom:{type:'string'},
    qty:{type:'string'},
    unitPrice:{type:'string'},
    discount:{type:'string'},
    tax:{type:'string'},
    discountOnAll:{type:'string'},
    shippingPackingCost:{type:'string'},
    cess:{type:'string'},
    reverseChange:{type:'string'},
    payment:{type:'string'},
    paymentType:{type:'string'},
    note:{type:'string'},
    moreNote:{type:'string'},
    privateNote:{type:'string'},
    amountPaid:{type:'string'},
    productDetails:  { type: 'json', columnType: 'array' }
  },

};

