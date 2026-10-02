"use strict";
const roles = {
  owner: { label: "OWNER / IMPLEMENTATION", copy: "요청을 받아 작업을 진행하고, 검토 결과를 반영해 최종 응답을 통합합니다." },
  reviewer: { label: "REVIEWER / PEER REVIEW", copy: "Owner의 현재 작업 공간을 읽기 전용으로 검토하고, 코드 품질과 회귀 위험에 대한 피드백을 전달합니다." },
  arbiter: { label: "ARBITER / ON-DEMAND", copy: "합의가 이루어지지 않거나 작업이 막혔을 때 호출되어 판정을 내립니다. 설정된 경우에만 협업에 참여합니다." }
};
document.querySelectorAll("[data-role]").forEach(button => {
  button.addEventListener("click", () => {
    const role = roles[button.dataset.role];
    if (!role) return;
    document.querySelectorAll("[data-role]").forEach(item => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("role-label").textContent = role.label;
    document.getElementById("role-copy").textContent = role.copy;
  });
});
