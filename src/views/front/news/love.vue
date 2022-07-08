<template>
  <div class="row">
    <!-- <div class="col-md-12 lockup_mobile mb-3">
      <img src="../../../assets/image/news/lockup.png" class="img-fluid rounded">
    </div> -->
    <div class="d-flex mb-4">
      <div class="col-md-3">
        <img src="../../../assets/image/news/love/2022jun_0601_pride_img7.jpg" class="img-fluid rounded">
      </div>
      <div class="col-md-3">
        <img src="../../../assets/image/news/love/2022jun_0601_pride_img1.jpg" class="img-fluid rounded">
      </div>
      <div class="col-md-3">
        <img src="../../../assets/image/news/love/2022jun_0601_pride_img2.jpg" class="img-fluid rounded">
      </div>
    </div>
    <div class="col-md-3">
      <img src="../../../assets/image/news/love/2022jun_0601_pride_img2.jpg" class="img-fluid rounded">
    </div>
    <div class="col-md-9 d-flex align-items-center lockup">
      <img src="../../../assets/image/news/lockup.png" class="img-fluid rounded">
    </div>
    <div class="col-md-3">
      <img src="../../../assets/image/news/love/2022jun_0601_pride_img4.jpg" class="img-fluid rounded">
    </div>
    <div class="col-md-3">
      <img src="../../../assets/image/news/love/2022jun_0601_pride_img5.jpg" class="img-fluid rounded">
    </div>
    <div class="col-md-4 d-flex align-items-center flex-column">
      <div class="aos-init aos-animation" data-aos="fade-left" data-aos-duration="1000">
        In celebration of LGBTQ+ Pride Month this year, we’ve made a donation to PFLAG, the first and largest organization for lesbian, gay, bisexual, transgender and queer (LGBTQ+) people and their parents, families and allies. Inspired by their mission, we gathered a few of our favorite people to talk about the idea of safe and welcoming spaces.
      </div>
      <div class="aos-init aos-animation" data-aos="fade-left" data-aos-duration="1000">
        <img src="../../../assets/image/news/jcrewxHRC.png" class="img-fluid rounded">
      </div>
    </div>
    <div class="col-md-12 new-box">
      <div class="col-md-6 text-center d-flex flex-column justify-content-center align-items-center aos-init aos-animation"
      data-aos="fade-right" data-aos-duration="1000">
          <h1>Kimberly Drew</h1>
          <h3>Critic & curator</h3>
          <h3>She/they</h3>
          <h3>@museummammy</h3>
          <p><b>What’s your relationship to creating community-centered spaces?</b></p>
          <p>“I don’t think that ‘safe spaces’ exist, but I always feel safer in spaces
            that think critically about accessibility. Inspired by amazing friends,
            I’ve learned about building spaces that don't disable others, and
            witnessed others as they have strived to do the same in their respective
            fields. At the end of the day, safety and accessibility are journeys and
            not destinations. We are all always learning and growing.”</p>
      </div>
      <div class="col-md-6">
         <img src="../../../assets/image/news/love/2022jun_0601_pride_img6.jpg" class="img-fluid rounded">
      </div>
    </div>
    <div class="col-md-12 mt-5 text-center d-flex flex-column flex-column justify-content-center align-items-center">
      <h1>“</h1>
      <h1 class="col-md-9">
        What do I love about being queer? Just about everything! I
        feel proud of my identity every hour of every day. I feel
        proud of my community from the moment I wake up to the
        moment I go to bed. I think we’re in a powerful moment of
        revolution and education and that thrills me to no end.
      </h1>
      <h1>“</h1>
    </div>
    <div class="col-md-12 new-box">
      <div class="col-md-6 text-center d-flex flex-column justify-content-center align-items-center aos-init aos-animation"
      data-aos="fade-left" data-aos-duration="1000">
          <h1>Chase Strangio</h1>
          <h3>Attorney</h3>
          <h3>He/him; they/them</h3>
          <h3>@chasestrangio</h3>
          <p><b>Tell us about who you are and what you do.</b></p>
          <p>“I’m a lawyer with the ACLU [American Civil Liberties Union] and
            have been litigating trans justice cases across the country for the
            past decade. I also lobby in state legislatures to stop pernicious
            anti-trans bills from becoming law, pushing back against some of the
            most extreme forms of state violence and power. I’ve lived in NYC
            for 13 years and love it here—I think our queer and trans community
            is so beautiful and magical. We unlock and reveal all of the
            possibilities that human beings possess. I am so grateful to be trans
            every single day, and I love the self-awareness and creativity
            that my existence has involved.”</p>
          <p><b>What roles have safe spaces and acceptance played in your life?</b></p>
          <p>“I have been on a lifelong journey learning self-acceptance, and I
            find more strength and peace in my body every day. I aspire to be
            open to uncovering all the ways that I may find a home in my body
            and the world. That openness is what makes me feel safe and alive. I
            feel most accepted when I’m in my power—that might just be sitting
            alone at home, feeling fully present and embodied; in court arguing
            cases on behalf of my community; or out to dinner with friends and
            feeling like I have the immense privilege to inhabit a body and a
            life that finally feels like my own.”</p>
      </div>
      <div class="col-md-6">
         <img src="../../../assets/image/news/love/2022jun_0601_pride_img7.jpg" class="img-fluid rounded">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.new-box{
  display:flex;
  flex-wrap:wrap;
  margin-top: 3rem;
  @media (max-width: 767px) {
    flex-direction: column-reverse ;
    >div{
      margin-bottom: 3rem;
    }
  }
}
.lockup{
  &_moblie{
    display:none;
  }
  @media (max-width: 767px) {
    display:none;
    &_moblie{
      display:block;
    }
  }
}
</style>
