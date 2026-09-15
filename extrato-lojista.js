<script type="module">
import { getFirestore, collection, query, where, orderBy, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { DATA_90_DIAS, formatarData, formatarMoeda } from "./config.js";
const db=window.db; const auth=window.auth;

window.montarExtratoLojista=async function(){
  const inicio=DATA_90_DIAS();
  const q=query(collection(db,"movimentacoes"), where("usuarioId","==",auth.currentUser.uid), where("tipo","==","DEBITO"), orderBy("data","desc"));
  const snap=await getDocs(q); let total=0, linhas=[];
  snap.forEach(d=>{ const m=d.data(); if(!m.data) return; const data=m.data.toDate?m.data.toDate():new Date(m.data); if(data<inicio) return; total+=Number(m.valor||0); linhas.push({data:formatarData(m.data), corrida:m.corridaId||"-", valor:Number(m.valor||0)}); });
  return {linhas,total};
};
</script>
