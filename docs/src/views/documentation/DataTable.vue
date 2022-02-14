<template>
  <div>
    <h3 class="text-lg font-bold mb-3">Data Table</h3>
     <div class="space-y-4 mb-6">
      <div class="w-10/12 mx-auto">
        <h4 class="text-blue-400 text-lg font-semibold ml-3">Primary (xs)</h4>
        <TWDataTable :columns="columns" :entries="entries" :route="route" variant="primary" size="xs"/>
      </div>
      <hr>

      <div class="w-10/12 mx-auto">
        <h4 class="text-gray-400 text-lg font-semibold ml-3">Secondary (sm)</h4>
        <TWDataTable :columns="columns" :entries="entries" :route="route" variant="secondary" size="sm"/>
      </div>
      <hr>

      <div class="w-10/12 mx-auto">
        <h4 class="text-green-400 text-lg font-semibold ml-3">Success (md)</h4>
        <TWDataTable :columns="columns" :entries="entries" :route="route" variant="success" size="md"/>
      </div>
      <hr>

      <div class="w-10/12 mx-auto">
        <h4 class="text-yellow-400 text-lg font-semibold ml-3">Warning (lg)</h4>
        <TWDataTable :columns="columns" :entries="entries" :route="route" variant="warning" size="lg"/>
      </div>
      <hr>

      <div class="w-10/12 mx-auto">
        <h4 class="text-red-400 text-lg font-semibold ml-3">Danger (sm)</h4>
        <TWDataTable :columns="columns" :entries="entries" :route="route" variant="danger" size="sm"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      //colunas da tabela espera-se name e text de cada coluna obs:campo name tem que ser os mesmos da entries
      columns: [
        { name: "id", text: "ID"},
        { name: "name", text: "Nome"},
        { name: "office", text: "Cargo"},
        { name: "city", text:"Cidade"},
      ],

      //entrada de dados para a tabela
      entries:[
        {id:1, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:13, name:"Jon Snow", office:"CEO", city:"Los Anageles"},
        {id:51, name:"Jon Snow", office:"Manager", city:"Los Anageles"},
        {id:17, name:"Wesley Snow", office:"Owner", city:"Los Anageles"},
        {id:12, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:19, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:21, name:"Tiago Snow", office:"CEO", city:"Los Anageles"},
        {id:31, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:41, name:"Maria Snow", office:"Developer", city:"Los Anageles"},
        {id:51, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:61, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:71, name:"Grayon John", office:"Owner", city:"Los Anageles"},
        {id:19, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:91, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:100, name:"Tob Snow", office:"Developer", city:"Los Anageles"},
        {id:134, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:167, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:1223, name:"Jennie Snow", office:"Developer", city:"Los Anageles"},
        {id:156, name:"Jon Snow", office:"Developer", city:"Los Anageles"},
        {id:142, name:"Tob Snow", office:"Developer", city:"Los Anageles"},
        {id:197, name:"Jon Snow", office:"Developer", city:"Los Anageles"},

      ],

      // link: rota onde sera redirecionado,
      // column: coluna de referencia que deseja ser um link mesmo nome da coluna de entries 
      route:{column:'name', link:'/documentation/data-table'}
    };
  },

};
</script>
