import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowCar from '@/components/ShowCar.vue'

describe('ShowCar.vue', () => {
  it('shows a car', () => {
    let car = {
      id: 1,
      name: 'Ferrari 488 Spider 2018',
      acceleration: "2.8 seconds",
      features: "Ferrari tends to focus on the job at hand, which is to deliver world-class performance and driver engagement, and as such, the features list tends to suffer somewhat. The 488 Spider doesn't offer you the same type of gear you'd find in a Mercedes-AMG drop-top, but there's enough to make it liveable. The exterior features standard carbon-ceramic brakes hidden behind exquisite 20-inch alloy wheels, the fastest fold-down roof Ferrari has ever produced, and heated side mirrors. Inside, you can expect to find a set of leather sports seats. You also get climate control and cruise control, as well as a reverse parking camera with reverse sensors. The 488 Spider also features keyless ignition, which is activated from the flat-bottomed steering wheel. Assistance features such as slip-angle management and carbon-ceramic brakes trim hairy situations."
    }
    const wrapper = shallowMount(ShowCar, {
      propsData: { car },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(car.name)
    let checkCarLink = wrapper.find('[data-test="car-link"]').exists();
    expect(checkCarLink).to.equal(true);
  })
})