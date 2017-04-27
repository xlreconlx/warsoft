var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "ventas-7db75",
    clientEmail: "firebase-adminsdk-27mvd@ventas-7db75.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwiCujepLH6F6c\nUbCrbE30Lbvj2wEgFEOSli/Q0Mo2/PISXZo7aYvBMiWyHVtnFTsgvSlfyQqShJmp\nRJ8HRFlH6aAKNaYj455e/HTs8BsfuYldWiIXT39mpj6+CpzYjOgBLALawtNcmeyx\neLEj7DpsTWHVv7NVNIOZxXJz6TKNoIW7J4zSIGRaNDw6QL/Tee2RFD1h/iwMCSRG\nifV7FRS+3mGoiMBwF5p5V4Ui/rfHHz0PdJwbOVA7hgzL97koljiy2gNpIgyWbx19\nmfZVQuKESc1nnldjv4I7b0lg39GkNxQIlGKP4k4OnXRiST1f+sKdLuQXKJePnSyu\nyU98sV4DAgMBAAECggEASx32a77pnHUNZTkBk0Anv6KCVAfJ58uXoVWVDSb7FQD3\nRMddrLBRzqi3D56cWTXYjirP4zlZ7VTNShCwFtiHoSkRd6ayho0Bw+trGbNl5078\n26NR5Fdon9ZX1mgPq7nxsyX2JP5IEBxTcoUn42BOz+zxl5HWDoilAxbYh+gQIeEa\naeTtIWEPA/BSMGrA5Gp0oh1389KdTqH7pXECqBAxSZk9cuLEOKirYpuO98jSxPB/\ncVng7T463nPA2S+cFG8yXlZnCLPLwOA/hT2FD82cyRdVby21T46Yc+2Lj4tOpBm5\ntH3W7lOJBSPsAXxlkoMvnWhT0+1XzCdr9AY4ryc5QQKBgQDah7NImalB+XLfktRY\n+uBAlYOXBGhwoaxzYS9NcztGGP6NVqbMzscdI3Kg0iH2sLgjaV+bVLV6zH8DMUc0\nPBbCmEqWzrTqLKe/Uuliq2WcXlPF93CTTJfDfZ95amsBApyY3qdnMUJScc7k6pq7\ndoNrt+Z9/qnwvvlFzrMhQVRf4wKBgQDOzPnMEjhbxU8UgvPECfd1CPwxG6PzWKtz\nt5YWD3GocW8SedAwBVSaDpEXp+rSa919atdWzJmNZuNtCEjBnvY976onF48kTE+v\nj3wXr5rTEALEFJ36BRvBi7LdFtNr3m9wNcysh/UwA6/FCaXLkoaH8DwmkYMIcFBA\n6rvVq38jYQKBgCoNAMfQocxLNvqko2334J0s6CRwObSqt6eAJP0PVnGXr6v8553z\nkEcgIhemN9jjiptt1HLsavuVTD+OBPidM3gAnCHG5vNE4oajaruM5cGgORiYE7aU\nf4OjscNIYgzQtteHyMjHps58jeZo6pt2I7Xfrl/CWGs2JHt1WezlSFonAoGBAMiP\n8xP/97jJO1DhUBkosV5IQI5ACFnR/TZVLrJmeAytNtPsYASypsJirkULDarWAhHI\ntN/xvlptFtR/3FAsIxUegx82shS6De5uciNmo/le5c/VTwFUQv8KxYW2xYUwTVO+\nWapakWjnqmimWq18hg0A6NVe+n4Mr0jGXzVzBfMBAoGBANjqaC3ux1odXmX4YxlB\npTtkB5DYMGBa8fys/enhgMqZOIJNnPH4Pooy6LORawtxz0nUxdKRpL8BRiCW5eYd\nXxtMyqK5K8J2n4UlvSsiLY9vslRA9mByWhgIBQILhuKjVFCwsdJ0K6nykVzB5k4F\neWiQi83n1FB26lar7nFH7Wbi\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://ventas-7db75.firebaseio.com"
});


exports.addUser = function(req, res) {
	console.log('POST');
	console.log(req.body);
	console.log(req.host)
	var estado;

	var newUser = {
	 email: req.body.email,
     emailVerified: false,
     password: req.body.password,
     displayName: req.body.email,
     disabled: false
    }
	
admin.auth().createUser(newUser)
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    estado = userRecord.uid;
    console.log("Successfully created new user:", userRecord.uid);
     return res.status(200).jsonp(estado);
  })
  .catch(function(error) {
  	estado = error;
    console.log("Error creating new user:", error);
    return res.send(500, estado);
  });
 
};