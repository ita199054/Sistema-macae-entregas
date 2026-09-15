<!-- PARTE 1 — CONFIGURAÇÕES PRINCIPAIS -->

<script type="module">

const TIPOS_VEICULO = {
  moto: "🏍️ Motoboy / Moto",
  utilitario: "🚐 Utilitário",
  caminhao: "🚚 Caminhão",
  carreta: "🚛 Carreta"
};

window.TIPOS_VEICULO = TIPOS_VEICULO;

/*
  Regras padrão
*/
window.CONFIG_PADRAO = {
  kmBase: 5,
  valorBase: 10,
  adicionalLojista: 2,

  ganhoBase: 7.50,
  adicionalMotorista: 1.50,

  dinamicaAtiva: false,
  dinamicaValor: 4.50,

  retornoAtivo: false,
  retornoPercentual: 50,

  superAtivo: false,
  superLojista: 8,
  superMotorista: 5
};

/*
  Valor padrão da chave PIX informada pelo usuário.
  Esta chave serve como informação de pagamento/recarga.
  Ela NÃO faz transferência bancária automática.
*/
window.PIX_EMPRESA = "22997450131";

/*
  Extrato: somente os últimos 90 dias
*/
window.DATA_90_DIAS = function(){

  const d = new Date();

  d.setDate(d.getDate() - 90);

  return d;

};

window.formatarMoeda = function(valor){

  return Number(valor || 0).toLocaleString(
    "pt-BR",
    {
      style:"currency",
      currency:"BRL"
    }
  );

};

window.formatarData = function(timestamp){

  if(!timestamp) return "-";

  let data;

  if(typeof timestamp.toDate === "function"){
    data = timestamp.toDate();
  }else{
    data = new Date(timestamp);
  }

  return data.toLocaleString("pt-BR");

};

</script>
