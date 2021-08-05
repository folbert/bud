/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-kjo",
factory: function (require) {
var plugin=(()=>{var $=Object.create,o=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var M=s=>o(s,"__esModule",{value:!0});var a=s=>{if(typeof require!="undefined")return require(s);throw new Error('Dynamic require of "'+s+'" is not supported')};var S=(s,t)=>{for(var e in t)o(s,e,{get:t[e],enumerable:!0})},T=(s,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of q(t))!I.call(s,i)&&i!=="default"&&o(s,i,{get:()=>t[i],enumerable:!(e=A(t,i))||e.enumerable});return s},n=s=>T(M(o(s!=null?$(F(s)):{},"default",s&&s.__esModule&&"default"in s?{get:()=>s.default,enumerable:!0}:{value:s,enumerable:!0})),s);var W={};S(W,{default:()=>R});var j=n(a("@yarnpkg/cli")),v=n(a("@yarnpkg/core")),w=n(a("@yarnpkg/shell")),O=1,m=0,r=class extends j.BaseCommand{async getManifest(){return await v.Manifest.tryFind(this.context.cwd)}async $(t){let e=await t.reduce(this.sequential.bind(this),this.promiseOK());return this.taskFailed(e)&&process.exit(O),Promise.resolve(m)}async sequential(t,e){let i=await t;return this.taskFailed(i)?O:Array.isArray(e)?this.$(e):this.runTask(e)}runTask(t){let[e,...i]=t.split(" ");return(0,w.execute)(e,i)}taskFailed(t){return Array.isArray(t)?t.filter(e=>e!==m).length>0:t!==m}async promiseOK(){return m}};r.usage={category:"kjo"};var y=n(a("clipanion")),c=class extends r{constructor(){super(...arguments);this.cjs=y.Option.Boolean("-c,--cjs",!1);this.esm=y.Option.Boolean("-e,--esm",!1);this.commands={all:"yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build",cjs:"yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build:cjs",esm:"yarn workspaces foreach --topological-dev --no-private --exclude @roots/bud-typings -i -p -v run build:esm"}}async execute(){let t=[];this.cjs&&t.push(this.commands.cjs),this.esm&&t.push(this.commands.esm),!this.cjs&&!this.esm&&t.push(this.commands.all),await this.$(t)}};c.paths=[["kjo","build"]];var P=n(a("clipanion")),l=class extends r{constructor(){super(...arguments);this.dfx=P.Option.Boolean("-d,--dfx",!1);this.commands={rm:["rm -rf **/.budfiles","rm -rf **/node_modules","rm -rf examples/*/dist","rm -rf examples/sage/public/*","rm -rf examples/sage/storage/bud/*","rm -rf packages/*/*/lib","rm -rf packages/*/*/types","yarn cache clean"],dfx:["git clean -dfx","yarn cache clean"]}}async execute(){this.dfx?await this.$(this.commands.dfx):this.$(this.commands.rm)}};l.paths=[["kjo","clean"]];var p=n(a("clipanion")),u=class extends r{constructor(){super(...arguments);this.prettier=p.Option.Boolean("-p,--prettier",!1);this.eslint=p.Option.Boolean("-e,--eslint",!1);this.skypack=p.Option.Boolean("-s,--skypack",!1);this.commands={eslint:["yarn eslint packages/**/src/**/*.{js,jsx,ts,tsx} --fix","yarn eslint dev/**/*.{js,jsx,ts,tsx} --fix","yarn eslint site/**/*.{js,jsx,ts,tsx} --fix"],prettier:["yarn prettier packages/**/src/**/*.{ts,js,tsx,jsx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern","yarn prettier dev/**/*.{ts,js,tsx,jsx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern","yarn prettier site/**/*.{ts,js,tsx,jsx,md,mdx} --fix --ignore-unknown --loglevel silent --no-error-on-unmatched-pattern"],skypack:["yarn workspaces foreach --no-private --exclude @roots/bud-typings -p -v run pkg"]}}async execute(){let t=[];this.eslint&&t.push(Object.values(this.commands.eslint)),this.prettier&&t.push(Object.values(this.commands.prettier)),this.skypack&&t.push(Object.values(this.commands.skypack)),!this.eslint&&!this.prettier&&!this.skypack&&t.push(Object.values(this.commands).reduce((e,i)=>[...e,...i]),[]),await this.$(t)}};u.paths=[["kjo","lint"]];var d=n(a("clipanion")),f=class extends r{constructor(){super(...arguments);this.unit=d.Option.Boolean("-u,--unit",!1);this.integration=d.Option.Boolean("-i,--integration",!1);this.workers=d.Option.String("-w,--workers","50%");this.commands={unit:['yarn jest --coverage --testPathIgnorePatterns="tests/integration" --testPathIgnorePatterns="tests/util" --maxWorkers={{workers}}'],integration:["node ./jest.integration.js"]}}async execute(){let t=[];this.unit&&t.push(this.commands.unit),this.integration&&t.push(this.commands.integration),!this.unit&&!this.integration&&t.push(Object.values(this.commands).reduce((e,i)=>[...e,...i]),[]),await this.$(t)}runTask(t){return super.runTask(t.replace("{{workers}}",this.workers))}};f.paths=[["kjo","test"]];var b=n(a("clipanion")),C=n(a("@yarnpkg/fslib")),h=class extends r{constructor(){super(...arguments);this.version=b.Option.String("-v,--version",{required:!1});this.tag=b.Option.String("-t,--tag",{required:!1})}async execute(){var e,i;let{raw:t}=await this.getManifest();t.manifest.version=(e=this.version)!=null?e:t.manifest.version,t.manifest.tag=(i=this.tag)!=null?i:t.manifest.tag,C.xfs.writeJsonSync(this.context.cwd.concat("/package.json"),t),this.version&&await this.$([`yarn workspaces foreach --no-private version --deferred ${t.manifest.version}`]),!this.version&&!this.tag&&console.log(`${t.manifest.version}`)}};h.paths=[["kjo","version"]];var B=n(a("clipanion")),g=class extends r{constructor(){super(...arguments);this.dfx=B.Option.Boolean("-d,--dfx",!1)}async execute(){let t=["yarn install --immutable","yarn kjo clean","yarn kjo build","yarn kjo test","yarn","yarn kjo lint","yarn kjo gen"];await this.$(t)}};g.paths=[["kjo","make"]];var k=n(a("clipanion")),x=class extends r{constructor(){super(...arguments);this.site=k.Option.Boolean("-s,--site",!1);this.readme=k.Option.Boolean("-r,--readme",!1);this.commands={site:["yarn ts-node ./dev/site","yarn docusaurus build"],readme:["yarn ts-node ./dev/readme"]}}async execute(){let t=[];this.readme&&t.push(this.commands.readme),this.site&&t.push(this.commands.site),!this.site&&!this.readme&&t.push(Object.values(this.commands).reduce((e,i)=>[...e,...i]),[]),await this.$(t)}};x.paths=[["kjo","gen"]];var K={hooks:{afterAllInstalled:()=>{console.log("What a great install, am I right?")}},commands:[c,l,u,g,x,f,h]},R=K;return W;})();
return plugin;
}
};