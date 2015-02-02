CloudFlare.define("parsely", ["parsely/config"], function(config) {

    // Add parsely-cfg
    (function(d) {
        var site = config.apikey,
            b = d.body,
            e = d.createElement("div");
        e.innerHTML = '<span id="parsely-cfg" data-parsely-site="'+site+'"></span>';
        e.id = "parsely-root";
        e.style.display = "none";
        b.appendChild(e);
    })(document);

    // Add parsely-script which is call to Parse.ly bootstrap
    (function(s, p, d) {
        var h=d.location.protocol,
            i=p+"-"+s,
            // e=d.getElementById(i),
            r=d.getElementById(p+"-root"),
            u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net":"static."+p+".com";

        CloudFlare.require([h+"//"+u+"/p.js"]);
        // if (e) return;
        // e = d.createElement(s); e.id = i; e.async = true;
        // e.src = h+"//"+u+"/p.js"; r.appendChild(e);
    })("script", "parsely", document);

});
