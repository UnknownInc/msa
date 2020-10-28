
export const readAuth = async (req, _res, next)=>{
  if (req.headers.authorization) {
    const authparts = req.headers.authorization.split(' ');
    if (authparts.length<2) {
      return next();
    }

    if (authparts[0]!=='Bearer') {
      return next();
    }

    try {
      // verify token authparts[1]
      // set req.uid & req.auser
      next();
    } catch(e) {
      next()
    }
  } else {
    next();
  }
}

export const requireAuth = async (req, res, next)=>{
  if (req.uid) {
    return next();
  } else {
    readAuth(req, res, ()=>{
      if (req.uid) return next();
      res.status(403).send('Unauthorized.');
    });
  }
}

export const requireUser = async (req, res, next)=>{
  await requireAuth(req, res,async ()=>{
    // const user = read from db user identified by req.uid
    // req.user = user;
    next();
  })
}