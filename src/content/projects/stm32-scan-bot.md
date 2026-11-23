---
title: 光伏清洗机器人主控固件 PV-Ctrl V1
titleEn: PV-Ctrl V1 — Main Controller Firmware for a PV-Cleaning Robot
period: 2026.09 – 至今
scope: 嵌入式全栈 · 固件 / PCB / Android 遥控端 / 行业调研
scopeEn: Embedded full-stack · firmware / PCB / Android remote / market research
tagline: 光伏清洗机器人 STM32F407 主控：FreeRTOS 固件、宿主机单测体系、自研 PCB 与配套调研
taglineEn: STM32F407 controller for a PV-cleaning robot — FreeRTOS firmware, host-side unit tests, in-house PCB, and market research
stack: ['STM32F407VET6', 'FreeRTOS', 'C11', 'SBUS', 'PID', 'MPU6050 / INA219', 'KiCad', 'Android']
order: 2
highlights:
  - 分层架构铁律：app / drivers 仅依赖 hal_api.h，所有触碰 STM32 HAL 的代码隔离于 bsp/
  - 宿主机单元测试体系（gcc 直接构建）：SBUS 解析、协议 CRC、PID 收敛与限幅、防跌落表决、MPU6050/INA219 换算等 383 checks 全过（-Wall -Wextra -Werror）
  - 安全分级动作：急停断使能、上电自检、看门狗喂狗、遥控失控保护
  - 自研 PCB 链路：KiCad 工程生成器 + freerouting 自动布线 + 自研双层 A* 补线器，达成 DRC 0 违规、未连接 0 遗留
  - 完成国内光伏清洗机器人行业三轮调研（市场格局 / 双机协同水洗方案 / 标准件选型 BOM）
highlightsEn:
  - "Strict layering: app/drivers depend only on hal_api.h; all STM32 HAL code is confined to bsp/"
  - "Host-side unit-test suite (plain gcc): SBUS parsing, protocol CRC, PID convergence and clamping, anti-fall voting, MPU6050/INA219 conversion — 383 checks passing with -Wall -Wextra -Werror"
  - "Safety-tiered actions: emergency-stop de-energizing, power-on self-test, watchdog feeding, and RC failsafe"
  - "In-house PCB pipeline: a KiCad project generator + freerouting auto-routing + a custom two-layer A* trace completer, reaching zero DRC violations and zero unconnected nets"
  - Three rounds of market research on China's PV-cleaning robot industry (landscape / dual-machine water-wash scheme / off-the-shelf BOM)
---
