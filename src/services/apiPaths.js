const apiPaths = {
  token: '/token',
  getProduct: '/api/Products/Get?pageIndex=1&searchValue=a',
  getProductVariants: '/api/ProductVariants/Get',
  createOrder: '/api/Orders/Create',
  getOrderList: '/api/Orders/GetAll',
  getOrderDetails: '/api/Orders/GetById',
  getUserInfo: '/api/Users/Get',
  register: '/api/Account/Register',
  getCouponPackage: '/api/CouponPackages/Get',
  createUserCouponPackage: '/api/UserCouponPackages/Create',
  getUserCouponPackage: '/api/UserCouponPackages/GetAll',
  getUserCouponPackageSingle: '/api/UserCouponPackages/GetSingle/',
  updateProfile: '/api/Users/Update/',
};

export default apiPaths;
