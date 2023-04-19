<template>
  <div class="container-lg fontFamilyKalam">
    <h1 class="fw-bold fontSize fontFamilyCourgette mb-5">Skills</h1>
    <div class="fs-4">
      This a List of Technologies that i worked with and have a pretty good
      understading of them.
    </div>

    <div class="d-flex flex-wrap justify-content-center m-3">
      <SkillsCard
        v-for="(skill, index) in skills"
        :key="skill.id"
        :icon="skill.src"
        :skillHref="skill.href"
        :draggable="true"
        @dragstart="dragStart(index)"
        @dragover="dragOver($event)"
        @dragleave="dragLeave($event)"
        @drop="drop(index)"
      >
        {{ skill.title }}</SkillsCard
      >
    </div>
  </div>
</template>

<script>
import SkillsCard from "@/components/SkillsCard.vue";
export default {
  components: {
    SkillsCard,
  },
  data() {
    return {
      skills: [
        {
          id: 1,
          title: "JavaScript",
          src: "https://img.icons8.com/color/200/000000/javascript.png",
          href: "https://www.javascript.com/",
        },
        {
          id: 2,
          title: "VueJS",
          src: "https://img.icons8.com/color/200/000000/vue-js.png",
          href: "https://vuejs.org/",
        },
        {
          id: 3,
          title: "NodeJS",
          src: "https://img.icons8.com/color/200/000000/nodejs.png",
          href: "https://nodejs.dev/en/",
        },
        {
          id: 4,
          title: "MongoDB",
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
          href: "https://www.mongodb.com/",
        },
        {
          id: 5,
          title: "Bootstarp",
          src: "https://img.icons8.com/color/200/000000/bootstrap.png",
          href: "https://getbootstrap.com",
        },
        {
          id: 6,
          title: "ExpressJS",
          src: "https://img.icons8.com/color/200/000000/express-js.png",
          href: "https://expressjs.com",
        },
        {
          id: 7,
          title: "HTML",
          src: "https://img.icons8.com/color/200/000000/html-5.png",
          href: "https://www.w3.org/html/",
        },
        {
          id: 8,
          title: "CSS",
          src: "https://img.icons8.com/color/200/000000/css3.png",
          href: "https://www.w3schools.com/css/",
        },
        {
          id: 9,
          title: "C++",
          src: "https://img.icons8.com/color/200/000000/c-plus-plus-logo.png",
          href: "https://www.w3schools.com/css/",
        },
        {
          id: 10,
          title: "MySQL",
          src: "https://img.icons8.com/fluent/200/000000/mysql-logo.png",
          href: "https://www.mysql.com/",
        },
        {
          id: 11,
          title: "Git",
          src: "https://img.icons8.com/color/200/000000/git.png",
          href: "https://git-scm.com/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fontSize {
  font-size: 50px;
}
</style>
