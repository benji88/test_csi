// Veniamin Blinov@CSi Group
'use strict';

const NOTIFICATION = "Заявителю известно, что в соответствии с пунктом 4 части 1 статьи 6 Федерального закона от 27 июля 2006 г. № 152-ФЗ «О персональных данных» (Собрание законодательства Российской Федерации, 2006, № 31, ст. 3451; 2020, № 17, ст. 2701) (далее – Федеральный закон от 27 июля 2006 г. № 152-ФЗ) Федеральная служба по интеллектуальной собственности осуществляет обработку персональных данных субъектов персональных данных, указанных в заявке, в целях и объеме, необходимых для предоставления государственной услуги. Заявитель подтверждает наличие согласия других субъектов персональных данных, указанных в заявке (за исключением согласия представителя), на обработку их персональных данных, приведенных в настоящей заявке, в Федеральной службе по интеллектуальной собственности в связи с предоставлением государственной услуги. Согласия оформлены в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. № 152-ФЗ. Заявителю известно, что с информацией о состоянии делопроизводства, в том числе о направленных заявителю документах, можно ознакомиться на сайтах Роспатента (www.rupto.ru) и ФИПС (www.fips.ru) в информационно-телекоммуникационной сети «Интернет».";

const OPTIONS_MKTU = [
  {"id": "1", "label": "Химические продукты"},
  {"id": "2", "label": "Краски, олифы, лаки"},
  {"id": "3", "label": "Препараты для чистки, парфюмерия и косметика"},
  {"id": "4", "label": "Технические масла, смазки, топлива"},
  {"id": "5", "label": "Фармацевтические препараты"},
  {"id": "6", "label": "Обычные металлы и сплавы"},
  {"id": "7", "label": "Машины, станки и двигатели"},
  {"id": "8", "label": "Ручные инструмены"},
  {"id": "9", "label": "Приборы, инструменты, оборудование"},
  {"id": "10", "label": "Медицинские приборы и инструменты"},
  {"id": "11", "label": "Устройства для получения тепла"},
  {"id": "12", "label": "Транспортные средства"},
  {"id": "13", "label": "Огнестрельное оружие и пиротехнические средства"},
  {"id": "14", "label": "Благородные металлы и их сплавы, изделия из них"},
  {"id": "15", "label": "Музыкальные инструменты"},
  {"id": "16", "label": "Бумага и изделия из бумаги"},
  {"id": "17", "label": "Резина, асбест, пластмассы"},
  {"id": "18", "label": "Кожа и имитация кожи"},
  {"id": "19", "label": "Неметаллические строительные материалы"},
  {"id": "20", "label": "Мебель и другие изделия"},
  {"id": "21", "label": "Домашняя и кухонная утварь"},
  {"id": "22", "label": "Верёвочно-канатные изделия"},
  {"id": "23", "label": "Нити текстильные и пряжа"},
  {"id": "24", "label": "Ткани, одеяла, покрывала и скатерти"},
  {"id": "25", "label": "Одежда, обувь, головные уборы"},
  {"id": "26", "label": "Галантерейные и басонные изделия"},
  {"id": "27", "label": "Покрытия для полов"},
  {"id": "28", "label": "Игрушки и спортивные товары"},
  {"id": "29", "label": "Продукты животного происхождения"},
  {"id": "30", "label": "Растительные пищевые продукты"},
  {"id": "31", "label": "Продукты земледелия и лесного хозяйства"},
  {"id": "32", "label": "Безалкогольные напитки и пиво"},
  {"id": "33", "label": "Алкогольные напитки (за исключением пива)"},
  {"id": "34", "label": "Табак и курительные принадлежности"},
  {"id": "35", "label": "Помощь в управлении бизнесом"},
  {"id": "36", "label": "Финансовые услуги"},
  {"id": "37", "label": "Строительство и ремонт"},
  {"id": "38", "label": "Телекоммуникации"},
  {"id": "39", "label": "Перевозка людей и товаров"},
  {"id": "40", "label": "Обработка материалов"},
  {"id": "41", "label": "Услуги обучения и развлекательные мероприятия"},
  {"id": "42", "label": "Научные и технические услуги"},
  {"id": "43", "label": "Гостиницы, кейтеринг"},
  {"id": "44", "label": "Медицинский и косметические услуги"},
  {"id": "45", "label": "Юридические услуги и службы безопасности"}
];

const OPTIONS_TAX_LEGAL = [
  {"id": "1", "label": "1.1. Регистрация заявки на выдачу патента Российской Федерации на изобретение (далее - заявка на изобретение)\n и принятие решения по результатам формальной экспертизы"},
  {"id": "2", "label": "1.2. Регистрация заявки на выдачу патента Российской Федерации на полезную модель (далее - заявка на полезную модель)\n и принятие решения по результатам формальной экспертизы заявки"},
  {"id": "3", "label": "1.9. Принятие решения по результатам экспертизы заявки на изобретение по существу: 1.9.1. в случае подачи ходатайства\n о проведении экспертизы по существу при подаче заявки на изобретение и направления отчета об информационном поиске до истечения 7 месяцев со дня удовлетворения ходатайства"},
  {"id": "4", "label": "1.9. Принятие решения по результатам экспертизы заявки на изобретение по существу: 1.9.2. в случае подачи ходатайства\n о проведении экспертизы по существу после подачи заявки на изобретение и направления отчета об информационном поиске до истечения 12 месяцев со дня удовлетворения ходатайства"},
  {"id": "5", "label": "1.10. Принятие решения по результатам экспертизы заявки на полезную модель по существу"},
  {"id": "6", "label": "1.18. Регистрация изобретения, полезной модели, промышленного образца, публикация сведений о выдаче патента"},
  {"id": "7", "label": "1.19.1.выдача патента на изобретение, промышленный образец, полезную модель по результатам экспертизы соответствующих заявок по существу"},
  {"id": "8", "label": "2.1. Регистрация заявки на регистрацию товарного знака, знака обслуживания (далее - заявка на товарный знак) и принятие\n решения по заявке на товарный знак по результатам формальной экспертизы"},
  {"id": "9", "label": "2.4. Проведение экспертизы обозначения, заявленного в качестве товарного знака, и принятие решения по ее результатам"},
  {"id": "10", "label": "2.11. Регистрация товарного знака"},
  {"id": "11", "label": "2.14. Выдача свидетельства на товарный знак, свидетельства на коллективный знак, свидетельства об исключительном праве\n на географическое указание, свидетельства об исключительном праве на наименование места происхождения товара"},
  {"id": "12", "label": "Статья 333.30. НК РФ Размеры государственной пошлины за совершение уполномоченным федеральным органом исполнительной\n власти действий по государственной регистрации программы для электронных вычислительных машин, базы данных и топологии интегральной микросхем"}
];

// Form layout; mb export and store as json? 
const G_TMFormLayout = {
  "subforms": [
    {
      "sf_name": "contact_data",
      "static": true,
      "header": "Адрес для переписки с РосПатентом",
      "fields_prefix": "cd",
      "fields": [ // here we store {type: "input" by default, default: "" by default, mandatory: false by default}
        {"id": "name_f", "label": "Фамилия"},
        {"id": "name_i", "label": "Имя"},
        {"id": "name_o", "label": "Отчество (при наличии)", "optional": true},
        {"id": "inst", "label": "Организация"},
        {"id": "addr", "label": "Адрес для корреспонденции"},
        {"id": "phone", "label": "Телефон"},
        {"id": "email", "label": "Адрес электронной почты"}
      ]
    },
    {
      "sf_name": "applicants_men",
      "fields_prefix": "am",
      "static": false, 
      "header": "Заявители - физические лица",
      "fields": [],
      "header_var": "Заявитель - ",
      "fields_var": [
        {"id": "name_f", "label": "Фамилия"},
        {"id": "name_i", "label": "Имя"},
        {"id": "name_o", "label": "Отчество"},
        {"id": "addr", "label": "Адрес"},
        {"id": "country", "label": "Страна", "type": "select_country", "default": "RU"},
        {"id": "inn", "label": "ИНН"},
        {"id": "snils", "label": "СНИЛС"},
        {"id": "pspt_type", "label": "Документ", "type": "select_passport", "defalut": "RU"},
        {"id": "pspt_seria", "label": "Серия паспорта"},
        {"id": "pspt_no", "label": "Номер паспорта"},
        {"id": "occup", "label": "Должность"},
      ]
    },
    {
      "sf_name": "applicants_inst",
      "fields_prefix": "ai",
      "static": false,
      "header": "Заявители - организации",
      "fields": [],
      "header_var": "Заявитель - ",
      "fields_var": [
        {"id": "name", "label": "Наименование юридического лица"},
        {"id": "addr", "label": "Адрес"},
        {"id": "ogrn", "label": "ОГРН"},
        {"id": "kpp", "label": "КПП"},
        {"id": "inn", "label": "ИНН"}
      ]
    },
    {
      "sf_name": "representative_legal",
      "fields_prefix": "rl",
      "static": false,
      "header": "Представители заявителя - патентные поверенные",
      "fields": [],
      "header_var": "Представитель [патентный поверенный] - ",
      "fields_var": [
        {"id": "name_f", "label": "Фамилия"},
        {"id": "name_i", "label": "Имя"},
        {"id": "name_o", "label": "Отчество"},
        {"id": "occup", "label": "Должность"},
        {"id": "addr", "label": "Адрес"},
        {"id": "phone", "label": "Телефон"},
        {"id": "fax", "label": "Факс"},
        {"id": "email", "label": "Адрес электронной почты"},
        {"id": "cert_id", "label": "Регистрационный номер поверенного"}
      ]
    },
    {
      "sf_name": "representative_other",
      "fields_prefix": "ro",
      "static": false,
      "header": "Представители заявителя - иные лица",
      "fields": [],
      "header_var": "Представитель [иное лицо] - ",
      "fields_var": [
        {"id": "name_f", "label": "Фамилия"},
        {"id": "name_i", "label": "Имя"},
        {"id": "name_o", "label": "Отчество"},
        {"id": "occup", "label": "Должность"},
        {"id": "addr", "label": "Адрес"},
        {"id": "phone", "label": "Телефон"},
        {"id": "fax", "label": "Факс"},
        {"id": "email", "label": "Адрес электронной почты"},
        {"id": "repr_to", "label": "Срок представительства: дата начала", "type": "date"},
        {"id": "repr_from", "label": "Срок представительства: дата окончания", "type": "date"}
      ]
    },
    {
      "sf_name": "trademark_info",
      "static": true,
      "header": "Заявляемое обозначение",
      "fields_prefix": "tm",
      "fields": [
        {"id": "file", "label": "Файл обозначения", "type": "file", "comment": "ограничить или процессить, чтобы был размер (gif, jpeg, png), mb restriction? size?"},
        {"id": "desc", "label": "Описание", "type": "textarea"},
        {"id": "color_space", "label": "Цвет", "type": "select_color"},
        {"id": "color_list", "label": "Перечислите цвета (для цветных изображений)"},
        {"id": "hint_verbal", "label": "Указание: словесный знак", "type": "flag"},
        {"id": "hint_izo", "label": "Указание: изобразительный знак", "type": "flag"},
        {"id": "hint_vol", "label": "Указание: объёмный знак", "type": "flag"},
        {"id": "hint_mixed", "label": "Указание: комбинированный знак", "type": "flag"},
        {"id": "hint_other", "label": "Указание: другое", "type": "flag", "comment": "другой тип знака или какое-то другое указание?"},
        {"id": "type", "label": "Тип знака", "type": "select_tm_type"},
        {"id": "detl", "label": "Пояснение", "type": "textarea", "placeholder": "характеристики знака, не являющегося словесным, изобразительным или их комбинацией"},
        {"id": "shared", "label": "Коллективный знак", "type": "flag"},
        {"id": "prtcd_el", "label": "Охраняемые элементы", "type": "textarea", "placeholder": "перечислить охраняемые элементы заявляемого товарного знака"}
      ]
    },
    {
      "sf_name": "mktu",
      "static": true,
      "header": "Классы МКТУ",
      "fields_prefix": "tm",
      "fields": [
        {"id": "ids", "label": "Идентификаторы классов", "type": "select_mktu", "comment": "выберите один или несколько классов http://select2.org/getting-started/basic-usage или так сделать"}
      ]
    },
    {
      "sf_name": "representative_legal",
      "fields_prefix": "rl",
      "static": true,
      "header": "Представители заявителя - патентные поверенные",
      "fields": [],
      "header_var": "Представитель [патентный поверенный] - ",
      "fields_var": [
        {"id": "name_f", "label": "Фамилия"},
        {"id": "name_i", "label": "Имя"},
        {"id": "name_o", "label": "Отчество"},
        {"id": "occup", "label": "Должность"},
        {"id": "addr", "label": "Адрес"},
        {"id": "phone", "label": "Телефон"},
        {"id": "fax", "label": "Факс"},
        {"id": "email", "label": "Адрес электронной почты"},
        {"id": "cert_id", "label": "Регистрационный номер поверенного"}
      ]
    },
    {
      "sf_name": "documents",
      "static": true,
      "header": "Перечень прилагаемых документов",
      "fields_prefix": "dc",
      "fields": [
        {"id": "mark", "label": "Заявляемое обозначение", "type": "file", "comment": "Тип: pdf или word"},
        {"id": "mark_pages", "label": " - количество страниц"},
        {"id": "mark_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "goods", "label": "Перечень товаров и (или) услуг ", "type": "file", "comment": "Тип: pdf или word"},
        {"id": "goods_pages", "label": " - количество страниц"},
        {"id": "goods_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "receipt", "label": "Документ, подтверждающий уплату пошлины (представляется по инициативе заявителя)", "type": "file", "comment": "Как его предоставить, если мы только форму заполняем?"},
        {"id": "receipt_pages", "label": " - количество страниц"},
        {"id": "receipt_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "statute", "label": "Устав коллективного знака, если заявка подается на коллективный знак ", "type": "file", "comment": "Тип: pdf или word"},
        {"id": "statute_pages", "label": " - количество страниц"},
        {"id": "statute_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "trans", "label": "Перевод на русский язык документов, прилагаемых к заявке ", "type": "file", "comment": "Тип: pdf или word"},
        {"id": "trans_pages", "label": " - количество страниц"},
        {"id": "trans_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "copy", "label": "Копия доверенности, удостоверяющая полномочия представителя ", "type": "file", "comment": "Тип: pdf или word"},
        {"id": "copy_pages", "label": " - количество страниц"},
        {"id": "copy_num", "label": " - количество экземпляров"},
        {"type": "separator"},
        {"id": "id_earlier", "label": "Cвидетельство на товарный знак, зарегистрированный ранее №", "optional": true},
        {"id": "geo_loc", "label": "Cвидетельство об исключительном праве на географическое указание, наименование места происхождения товара №", "optional": true}
      ]
    }
  ]
};

/* global cache for storing values */
var G_FormCache = {};
let subnets = G_TMFormLayout.subforms.length;
for (let i=0; i<subnets; i++) {
  if (G_TMFormLayout.subforms[i].static == false) {
      G_FormCache[G_TMFormLayout.subforms[i].fields_prefix] = [];
  }
}


function commonElement(type_, name_, label_, req_, comment_, placeholder_, cacheobj_, cachekey_, callback_) {
  if (type_ === undefined || type_ == "text" ) {  // text
    return (
      <tr>
        <td>{label_}</td>
        <td> <input type="text" name={name_} placeholder={placeholder_ === undefined ? " " : placeholder_} className={req_ == true ? "mandatory" : "optional"} value={cacheobj_[cachekey_]} onChange={callback_} /></td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "textarea") {
    return (
      <tr>
        <td>{label_}</td>
        <td><textarea rows="2" cols="55" name={name_} placeholder={placeholder_ === undefined ? " " : placeholder_} className={req_ == true ? "mandatory" : "optional"} value={cacheobj_[cachekey_]} onChange={callback_} /></td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "flag") {
    return (
      <tr>
        <td>{label_}</td>
        <td><input type="checkbox" name={name_} value={cacheobj_[cachekey_]} onChange={callback_} /></td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "separator") {
    return (
      <tr>
        <td colSpan="3" className="separator">{label_}</td>
      </tr>
    );
  }
  if (type_ == "file") {
    return (
      <tr>
        <td>{label_}</td>
        <td> <input type="file" name={name_} value={cacheobj_[cachekey_]} onChange={callback_} /></td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "select_country") {
    return (
      <tr>
        <td>{label_}</td>
        <td>
          <select width="200px" name={name_} value={cacheobj_[cachekey_]} onChange={callback_}>
            <option key="ru" value="RU">Россия</option>
            <option key="ua" value="UA">Украина</option>
            <option key="tr" value="TR">Турция</option>
            <option key="bl" value="BL">Беларусь</option>
          </select>
        </td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "select_color") {
    return (
      <tr>
        <td>{label_}</td>
        <td>
          <select width="200px" name={name_} value={cacheobj_[cachekey_]} onChange={callback_}>
            <option value="GRAYSCALE">Чёрно-белое (оттенки серого)</option>
            <option value="COLOR">Цвертное</option>
          </select>
        </td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "select_tm_type") {
    return (
      <tr>
        <td>{label_}</td>
        <td>
          <select width="200px" name={name_} value={cacheobj_[cachekey_]} onChange={callback_}>
            <option value="LIGHT">световой знак</option>
            <option value="MUTABLE">изменяющийся знак</option>
            <option value="POSITIONAL">позиционный знак</option>
            <option value="TOUCH">осязательный знак</option>
            <option value="TASTE">вкусовой знак</option>
            <option value="HOLOGRAPHIC">голографический знак</option>
            <option value="SOUND">звуковой знак</option>
            <option value="SMELL">обонятельный знак</option>
            <option value="COLORS_ONLY">знак, состоящий исключительно из одного или нескольких цветов</option>
          </select>
        </td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    );
  }
  if (type_ == "select_mktu") {
    return (
      <tr>
        <td>{label_}</td>
        <td>
          <select size="15" name={name_} value={cacheobj_[cachekey_]} onChange={callback_} multiple>
            {
              OPTIONS_MKTU.map((el) => <option value={el.id} title={el.label}>{el.id + " - " + el.label}</option>)
            }
          </select>
        </td>
        <td>{comment_ === undefined ? "комментарий" : comment_}</td>
      </tr>
    ); 
  }
}


class DynamicSubform extends React.Component {
  layout = {};  // full subform config
  prefix = "";  // global cache values key
  fields = "";
  fields_var = {};  // repeating subform fields
  is_dynamic = false;

  constructor(props) {
    super(props);
    this.layout = G_TMFormLayout["subforms"][props.subnetwork];
    this.prefix = this.layout.fields_prefix;
    this.fields_var = this.layout.fields_var;
    this.fields = this.layout.fields;
    this.is_dynamic = !(this.layout.static);

    this.state = {
      varlen: 0,
      varord: [], // order of subforms
      minimized: false,
      cache: G_FormCache[this.prefix]
    };

    this.handleChangeDynamic = this.handleChangeDynamic.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.removeBlock = this.removeBlock.bind(this);
    this.minimizeSubform = this.minimizeSubform.bind(this);
    this.clearBlock = this.clearBlock.bind(this);
  }

  handleChangeStatic(event) {
    if (event.target.type == "checkbox") {
      G_FormCache[event.target.name] = event.target.checked;
    }
    if (event.target.type == "select-multiple") {
      G_FormCache[event.target.name] = event.target.selectedOptions;
    }
    else {
      G_FormCache[event.target.name] = event.target.value;  
    }
  }

  handleChangeDynamic(event) {
    let name_parts = event.target.name.split('.'); // <subnet_prefix>_<number>_<fields_name>
    this.state.cache[this.state.varord[parseInt(name_parts[1])]][name_parts[2]] = event.target.value;
    this.setState({cache: this.state.cache});
    console.log(G_FormCache[this.prefix]);
  }

  addBlock() {
    this.state.varord.push(this.state.varlen);
    let fields = this.layout.fields_var;
    let blank = {};
    for (let i=0; i<fields.length; i++) {
      blank[fields[i]["id"]] = (fields[i]["default"] === undefined ? "" : fields[i]["default"]);
    }
    this.state.cache.push(blank);
    this.setState({varlen: this.state.varlen + 1});
  }

  removeBlock() {
    if (this.state.varlen > 0) {
      if (confirm("Вы действительно хотите удалить эту форму?")) {
        let num = parseInt(event.target.name.split('.')[1]); // <subnet_prefix>_<number>_<fields_name>
        this.state.varord.splice(num, 1);
        this.setState({varlen: this.state.varlen - 1});
      }
    }
  }

  clearBlock() {
    if (confirm("Вы действительно хотите очистить эту форму?")) {
      let target = this.state.varord[parseInt(event.target.name.split('.')[1])]; // <subnet_prefix>_<number>_<fields_name>
      let fields = this.layout.fields_var;
      for (let i=0; i<fields.length; i++) {
        this.state.cache[target][fields[i]["id"]] = (fields[i]["default"] === undefined ? "" : fields[i]["default"]);
      }
      this.setState({cache: this.state.cache});
    }
  }

  minimizeSubform() {
    this.setState({minimized: !(this.state.minimized)});
  }

  headerElement() {
    return (
      <thead>
        <tr>
          <td colSpan="2">
            {this.layout.header}  
          </td>
          <td style={{textAlign: "right"}}>
            {
              (this.is_dynamic) ? (<input type="button" className="header_controls" name={this.prefix + ".add_button"} value="добавить" title="добавить" onClick={this.addBlock} />) : <div />
            }
            <input type="button" className="header_controls" name={this.prefix + ".min_button"} value={(this.state.minimized) ? "развернуть" : "свернуть"} title="Свернуть" onClick={this.minimizeSubform} /> 
          </td>
        </tr>
      </thead>
    );
  }

  headerFieldsElement() {
    if ((this.fields.length > 0) && (this.state.minimized == false)) {
      return (
        <tbody>
          <tr>
            <th width="300px">Поле</th>
            <th>Значение</th>
            <th>Комментарий</th>
          </tr>
          {
            this.fields.map((el) => commonElement(el.type, this.prefix + "." + el.id, el.label, el.optional != true, el.comment, el.placeholde, G_FormCache, this.prefix + "." + el.id, this.handleChangeStatic))
          }
        </tbody>
      );
    }
    else {
      return <tbody></tbody>
    } 
  }

  varformElement(form_num) {
    return (
      <table className="styled-table">
        <thead>
          <tr>
            <td>
              {this.layout.header_var + (form_num + 1)}
            </td>
            <td colSpan="2" style={{textAlign: "right"}}>
              {
                (this.is_dynamic) ? <input type="button" className="header_controls" name={this.prefix + "." + form_num + ".clr_button"} value="очистить" title="Очистить" onClick={this.clearBlock} /> : (<p />)
              }
              {
                (this.is_dynamic) ? <input type="button" className="header_controls" name={this.prefix + "." + form_num + ".del_button"} value="удалить" title="Удалить" onClick={this.removeBlock} /> : (<p />)
              }
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th width="300px">Поле</th>
            <th>Значение</th>
            <th>Комментарий</th>
          </tr>
          {
            this.fields_var.map(
              (el) => commonElement(
                el.type,  // type_
                this.prefix + "."  + form_num + "." + el.id,  // name_ as html form name
                el.label,  // label_ text label
                el.optional != true,  // required_?
                el.comment,  // comment_ text
                el.placeholder,  // placeholder_ text
                this.state.cache[this.state.varord[form_num]],  // value object containter
                el.id,  // value object key in container
                this.handleChangeDynamic  // callback
              )
            )
          }
        </tbody>
      </table>
    );
  } 

  render() {
    var result = [(
      <table className="styled-table">
        {this.headerElement()}
        {this.headerFieldsElement()}
      </table>
    )]
    if (this.state.minimized == false) {
      for (let i = 0; i < this.state.varlen; i++) {
        result.push(this.varformElement(i));
      }
    }
    return result;
  }
};


class ProiritySubform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        valsCache: {
          "tm_priority": "disabled",
          "checkbox1": "false",
          "checkbox2": "false",
          "checkbox3": "false",
          "checkbox4": "false",
          "checkbox5": "false",
          "checkbox6": "false",
        }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.type == "checkbox") {
      this.state.valsCache[event.target.name] = event.target.checked;
    }
    else {
      this.state.valsCache[event.target.name] = event.target.value;
    }
    console.log(this.state.valsCache);
    this.setState({valsCache: this.state.valsCache});
  }

  render() {
    var selector = (
      <table>
        <tbody>
          <tr>
            <td>Приоритет товарного знака</td>
            <td>
            <select width="200px" name="tm_priority" value={this.state.valsCache["tm_priority"]} onChange={this.handleChange}>
              <option value="disabled">не устанавливать</option>
              <option value="enabled">установить</option>
            </select>
            </td>
          </tr>
        </tbody>
      </table>
    );
    var result = [selector];
    if (this.state.valsCache["tm_priority"] == "enabled") {
      result.push(
      <table className="styled-table">
        <tbody>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox1" value={this.state.valsCache["checkbox1"]} onChange={this.handleChange} />по дате подачи первой(ых) заявки(ок) в государстве - участнике Парижской конвенции по охране промышленной собственности (п. 1 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox2" value={this.state.valsCache["checkbox2"]} onChange={this.handleChange} />по дате начала открытого показа экспоната на выставке (пункт 2 статьи 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox3" value={this.state.valsCache["checkbox3"]} onChange={this.handleChange} />по дате приоритета первоначальной заявки, из которой данная заявка выделена (пункт 2 статьи 1494 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox4" value={this.state.valsCache["checkbox4"]} onChange={this.handleChange} />по дате международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox5" value={this.state.valsCache["checkbox5"]} onChange={this.handleChange} />по дате внесения записи о территориальном расширении по международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox6" value={this.state.valsCache["checkbox6"]} onChange={this.handleChange} />по дате приоритета международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2">проверить валидность сочетаний галок</td></tr>
          <tr><td colSpan="2"></td></tr>
          <tr><td colSpan="2">ПРОШУ УСТАНОВИТЬ ДАТУ ПОДАЧИ НАСТОЯЩЕЙ ЗАЯВКИ по дате подачи первоначальной заявки, из которой данная заявка выделена (ст. 1491, п. 2 ст. 1502 Кодекса);</td></tr>
          <tr><td>№ первой заявки</td><td><input type="text" name="first_app_num" value={this.state.valsCache["first_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="first_app_date" value={this.state.valsCache["first_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета)</td><td><input type="text" name="first_app_country" value={this.state.valsCache["first_app_country"]} onChange={this.handleChange} /></td></tr>
          <tr><td>№ первоначальной заявки</td><td><input type="text" name="init_app_num" value={this.state.valsCache["init_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="init_app_date" value={this.state.valsCache["init_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета)</td><td><input type="text" name="init_app_country" value={this.state.valsCache["init_app_country"]} onChange={this.handleChange} /></td></tr>
          <tr><td>№ международной регистрации</td><td><input type="text" name="int_app_date_app_num" value={this.state.valsCache["int_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="int_app_date" value={this.state.valsCache["int_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета) тут везде конвенционный?</td><td><input type="text" name="int_app_country" value={this.state.valsCache["int_app_country"]} onChange={this.handleChange} /></td></tr>
        </tbody>
      </table>
      );
    }
    return result;
  }
};


class TaxSubform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        valsCache: {
          "tm_priority": "disabled",
          "checkbox1": "false",
          "checkbox2": "false",
          "checkbox3": "false",
          "checkbox4": "false",
          "checkbox5": "false",
          "checkbox6": "false",
        }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.type == "checkbox") {
      this.state.valsCache[event.target.name] = event.target.checked;
    }
    else {
      this.state.valsCache[event.target.name] = event.target.value;
    }
    console.log(this.state.valsCache);
    this.setState({valsCache: this.state.valsCache});
  }

  render() {
    var selector = (
      <table className="styled-table">
        <thead>
          <tr>
            <td colSpan="3">
              Пошлина
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Плательщик соответствует заявителю</td>
            <td>
              <select id="payer">
                <option value="NONE">Нет</option>
                {
                  <option value="PERSON1">при выборе сделать подтягивание данных</option>
                }
              </select>
            </td>
            <td>
              Для заполнения формы данными заявителя выберите соответствующего заявителя
            </td>
          </tr>
          <tr>
            <td>Пошлина уплачена по приложению</td>
            <td>
              <select className={"long_select"} name="tax_option" value={G_FormCache["tax_option"]} onChange={this.handleChange}>
              {
                OPTIONS_TAX_LEGAL.map((el) => <option value={el.id} title={el.label}>{el.label}</option>)
              }
              </select>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
    var result = [selector];
    if (this.state.valsCache["tm_priority"] == "enabled") {
      result.push(
      <table className="styled-table">
        <tbody>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox1" value={this.state.valsCache["checkbox1"]} onChange={this.handleChange} />по дате подачи первой(ых) заявки(ок) в государстве - участнике Парижской конвенции по охране промышленной собственности (п. 1 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox2" value={this.state.valsCache["checkbox2"]} onChange={this.handleChange} />по дате начала открытого показа экспоната на выставке (пункт 2 статьи 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox3" value={this.state.valsCache["checkbox3"]} onChange={this.handleChange} />по дате приоритета первоначальной заявки, из которой данная заявка выделена (пункт 2 статьи 1494 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox4" value={this.state.valsCache["checkbox4"]} onChange={this.handleChange} />по дате международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox5" value={this.state.valsCache["checkbox5"]} onChange={this.handleChange} />по дате внесения записи о территориальном расширении по международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2"><label><input type="checkbox" name="checkbox6" value={this.state.valsCache["checkbox6"]} onChange={this.handleChange} />по дате приоритета международной регистрации (п. 4 ст. 1495 Кодекса)</label></td></tr>
          <tr><td colSpan="2">проверить валидность сочетаний галок</td></tr>
          <tr><td colSpan="2"></td></tr>
          <tr><td colSpan="2">ПРОШУ УСТАНОВИТЬ ДАТУ ПОДАЧИ НАСТОЯЩЕЙ ЗАЯВКИ по дате подачи первоначальной заявки, из которой данная заявка выделена (ст. 1491, п. 2 ст. 1502 Кодекса);</td></tr>
          <tr><td>№ первой заявки</td><td><input type="text" name="first_app_num" value={this.state.valsCache["first_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="first_app_date" value={this.state.valsCache["first_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета)</td><td><input type="text" name="first_app_country" value={this.state.valsCache["first_app_country"]} onChange={this.handleChange} /></td></tr>
          <tr><td>№ первоначальной заявки</td><td><input type="text" name="init_app_num" value={this.state.valsCache["init_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="init_app_date" value={this.state.valsCache["init_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета)</td><td><input type="text" name="init_app_country" value={this.state.valsCache["init_app_country"]} onChange={this.handleChange} /></td></tr>
          <tr><td>№ международной регистрации</td><td><input type="text" name="int_app_date_app_num" value={this.state.valsCache["int_app_num"]} onChange={this.handleChange} /></td></tr>
          <tr><td>Дата испрашиваемого приоритета</td><td><input type="date" name="int_app_date" value={this.state.valsCache["int_app_date "]} onChange={this.handleChange} /></td></tr>
          <tr><td>Код страны подачи по стандарту ВОИС ST. 3 (при испрашивании конвенционного приоритета) тут везде конвенционный?</td><td><input type="text" name="int_app_country" value={this.state.valsCache["int_app_country"]} onChange={this.handleChange} /></td></tr>
        </tbody>
      </table>
      );
    }
    return result;
  }
};

for (let i = 0; i < G_TMFormLayout.subforms.length; i++) {
  console.log("#" + G_TMFormLayout.subforms[i]["sf_name"] + "_subform");
  ReactDOM.render(
    <DynamicSubform subnetwork={i} />,
    document.querySelector("#" + G_TMFormLayout.subforms[i]["sf_name"] + "_subform")
  );
}

ReactDOM.render(
  React.createElement(ProiritySubform),
  document.querySelector("#priority_subform")
);

ReactDOM.render(
  React.createElement(TaxSubform),
  document.querySelector("#tax_subform")
);


document.getElementById('form_container').style.visibility = "visible";
document.getElementById('load_container').style = "display: none;";

